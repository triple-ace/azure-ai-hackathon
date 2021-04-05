# %% Load modules
import numpy as np
import pandas as pd
import datetime
import matplotlib.pyplot as plt
import matplotlib.ticker as ticker
from matplotlib import animation as anim
from celluloid import Camera
import seaborn as sns

from JSAnimation import IPython_display

from azureml.core import Workspace, Dataset
from IPython.display import HTML

from utils.read_from_datastore import read_from_datastore

# %% Create data viz class
class FlightsDataVizAnimated():

    def __init__(self, file_path):
        self.workspace = Workspace.from_config()
        self.datastore = self.workspace.get_default_datastore()
        self.data = read_from_datastore(self.workspace, file_path)

        self.airports = Dataset.get_by_name(self.workspace, name='airport_list')
        self.airports = self.airports.to_pandas_dataframe()

        # Fill na with zeros
        self.data['positive'] = pd.to_numeric(self.data['positive']).fillna(0).astype(int)
        self.data['total_daily_flights'] = self.data['total_daily_flights'].fillna(0).astype(int)

    def create_animated_scatter(self, plots=None, style='seaborn', dim=None, out_path=None):

        bool_recent_dates = self.data['date'] >= datetime.datetime(2019, 10, 1)
        recent_dates = self.data[bool_recent_dates].copy(deep=True)

        recent_dates.sort_values(
            by=['date', 'departure_state', 'departure_airport'], 
            inplace=True, ascending=True
        )

        day_grps = recent_dates[
            ['date', 'departure_state', 'departure_airport', 
            'departure_airport_name', 'positive', 'total_daily_flights']
        ].groupby(['date'])

        nstates = plots if plots else day_grps['departure_state'].nunique()[0]
        # print(nstates)
        # nstates_rows = np.int(np.ceil(np.sqrt(nstates)))

        dim = dim if dim else (15, 10)

        plt.style.use(style)
        fig, axs = plt.subplots(
            figsize=(70, 30),
            nrows=2, 
            ncols=5
        )
        fig.tight_layout(pad=6)

        plt.rcParams['font.size'] = '30'

        # Remove empty plots
        for ax in axs.flatten()[nstates:]:
            ax.axis("off")

        # writer = anim.FFMpegWriter()
        # writer = Writer(fps=15, metadata=dict(artist='Me'), bitrate=1800)
        camera = Camera(fig)

        data_ranges_by_state = self.get_data_range()

        days = list(day_grps)
        for day_num, (key_d, day) in enumerate(days):

            if day_num > 0:
                past_values = recent_dates['date'] <= key_d
                day = recent_dates.loc[past_values].copy(deep=True)

            state_grps = day.groupby(['departure_state'])
            
            states = list(state_grps)[:plots] if plots else list(state_grps)

            targets = zip(states, axs.flatten())
            for (key_s, state), ax in targets:

                case_min, case_max, flight_min, flight_max = data_ranges_by_state.filter(
                    items=[key_s], axis=0
                ).T.to_numpy()
            
                # Set color map
                unique_airports = state['departure_airport'].unique()
                rgb_values = sns.color_palette("Set2", 10)
                color_map = dict(zip(unique_airports, rgb_values), _PAST=(128/255,128/255,128/255))

                for _, airport in state.groupby(['departure_airport']):
                    past_values = airport['date'] < key_d
                    airport.loc[past_values, ['departure_airport']] = '_PAST'

                    # Plot past values
                    ax.scatter(
                        airport.loc[past_values]['positive'], 
                        airport.loc[past_values]['total_daily_flights'], 
                        s=200, c=airport.loc[past_values]['departure_airport'].map(color_map),
                        edgecolor='black', linewidth=1, alpha=0.70,
                        label='_PAST'
                    )

                    # Plot present values
                    ax.scatter(
                        airport.loc[~past_values]['positive'], 
                        airport.loc[~past_values]['total_daily_flights'], 
                        s=200, c=airport.loc[~past_values]['departure_airport'].map(color_map),
                        edgecolor='black', linewidth=1, alpha=0.70,
                        label=airport.loc[~past_values]['departure_airport'].iloc[0]
                    )

                ax.set_title(f'State: {key_s}', fontsize=35)
                plt.text(
                    0.1, 1.01, f'{key_d.strftime(r"%Y %b")}', 
                    horizontalalignment='center', verticalalignment='bottom', 
                    transform=ax.transAxes,
                    fontsize=35
                )
            
                ax.set_xlabel('Confirmed cases', fontsize=35)
                ax.tick_params(axis='x', which='major', labelsize=30)
                ax.tick_params(axis='y', which='major', labelsize=30)
                ax.xaxis.set_minor_formatter(ticker.StrMethodFormatter('{x:,.0f}'))
                ax.xaxis.set_major_formatter(ticker.StrMethodFormatter('{x:,.0f}'))
                ax.set_xlim(case_min-case_max*0.1, case_max*1.1)

                if day_num == 0:
                    ax.legend(fontsize=30)

                ax.set_ylabel('Total monthly flights', fontsize=35)
                ax.yaxis.set_major_formatter(ticker.StrMethodFormatter('{x:,.0f}'))
                ax.set_ylim(flight_min-flight_max*0.1, flight_max*1.1)

                plt.setp(ax.get_xticklabels(), rotation=30, ha='right')
            
            camera.snap()

        animation = camera.animate(interval=700)
        animation.save('../plots/animated/flights_covid_animated.gif', writer = 'imagemagick')
        # animation.save('../plots/animated/flights_covid_animated.mp4', writer = writer)

    def set_states_to_plot(self, states):
        states = self.data['departure_state'].isin(states)
        self.data = self.data[states]

    def agg_by_month(self):
        self.data['year'] = self.data['date'].dt.year
        self.data['month'] = self.data['date'].dt.month

        data_grped = self.data.groupby(['departure_state', 'departure_airport', 'year', 'month'])
        self.data = data_grped.agg(
            total_daily_flights=('total_daily_flights', np.sum),
            positive=('positive', np.max),
            departure_airport_name=('departure_airport_name', 'first')
        ).reset_index()

        self.data['date'] = [datetime.datetime(yr, mon, 1) for yr, mon in zip(self.data['year'], self.data['month'])]
        
    def get_data_range(self):
        grp = self.data[
            ['departure_state', 'positive', 'total_daily_flights']
        ].groupby(['departure_state'])

        date_ranges = grp.agg(
            case_min=('positive', np.min),
            case_max=('positive', np.max),
            flight_min=('total_daily_flights', np.min),
            flight_max=('total_daily_flights', np.max)
        )

        return date_ranges

# %%
if __name__ == "__main__":
    plotObj = FlightsDataVizAnimated('full_df.csv')
    plotObj.set_states_to_plot(
        ['GA', 'TX', 'NY', 'IL', 'CA', 'NC', 'NV', 'AZ', 'FL', 'WA']
    )
    plotObj.agg_by_month()
    plotObj.create_animated_scatter(plots=None)
