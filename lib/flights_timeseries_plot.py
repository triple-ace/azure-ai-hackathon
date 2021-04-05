# %% Load modules
import numpy as np
import pandas as pd
import datetime
import glob
import base64
import os
import matplotlib.pyplot as plt
import matplotlib.ticker as ticker
import matplotlib.dates as mdates

from azureml.core import Workspace
from IPython.display import HTML

from utils.read_from_datastore import read_from_datastore
from utils.upload_to_datastore import upload_to_datastore
from utils.state_abbrev_to_full import state_abbrev_to_full

# %% Create data viz class
class FlightsDataViz():

    def __init__(self, file_path):
        self.workspace = Workspace.from_config()
        self.datastore = self.workspace.get_default_datastore()
        self.data = read_from_datastore(self.workspace, file_path)

    def create_time_series_plots(self, plots=None, style='seaborn', dim=None, out_path=None):
        """Create covid cases and flights time series plots for each state

        Args:
            plots (int, optional): How many states to plot. Plots all if None. Defaults to None.
            style (str, optional): Plot style to use. Defaults to 'seaborn'.
            out_path (str, optional): Where to save the plots. Defaults to None.
        """
        data_grped = self.data.groupby(['departure_state'])

        plt.style.use(style)

        grps = list(data_grped)[:plots] if plots else list(data_grped)

        dim = dim if dim else (15, 10)

        for _, grp in grps:
            # Initialize subplots
            fig, axs = plt.subplots(
                figsize=dim,
                nrows=2, ncols=1,
                gridspec_kw=dict(height_ratios=[1, 1.5]),
                sharex=True
            )

            airport_grp = grp.groupby(['departure_airport'])
            _, covid_cases = list(airport_grp)[0]

            self.plot_covid_cases(covid_cases, axs)

            self.plot_flights(grp, airport_grp, axs)

            plt.tight_layout()
            # Rotates and right aligns the x tick labels
            fig.autofmt_xdate()

            if out_path:
                fig.savefig(
                    f'../plots/time_series/{covid_cases["departure_state"].iloc[0]}_ts_plot.png', 
                    dpi=fig.dpi,
                    facecolor='white', 
                    transparent=False
                )

            plt.show()

    @staticmethod
    def plot_covid_cases(covid_cases, axs):
        ax1 = axs[0]
        ax1.plot(covid_cases['date'], covid_cases['positive'], label='positive')
        ax1.plot(covid_cases['date'], covid_cases['probableCases'], label='probable')
        ax1.plot(covid_cases['date'], covid_cases['death'], label='deaths')
        ax1.plot(covid_cases['date'], covid_cases['recovered'], label='recovered')
        ax1.axvline(datetime.datetime(2020, 3, 11), linestyle='--', alpha=0.75, color='grey', label='WHO declared COVID-19 a pandemic')

        ax1.set_title(
            f'{state_abbrev_to_full(covid_cases["departure_state"].iloc[0])}',
            fontsize=35
        )
        ax1.set_xlim((datetime.date(2019, 1, 1), datetime.date(2021, 1, 1)))

        # Set tick label size
        ax1.tick_params(axis='y', which='major', labelsize=18)

        # Set tick format
        ax1.yaxis.set_major_formatter(ticker.StrMethodFormatter('{x:,.0f}'))
        ax1.set_ylabel('Cumulative COVID cases', fontsize=20)
        ax1.legend(loc='lower left', fontsize=16)

    @staticmethod
    def plot_flights(grp, airport_grp, axs):
        airports = list(airport_grp)
        ax2 = axs[1]

        for _, airport in airports:
            ax2.plot(airport['date'], airport['total_daily_flights'], label=f'{airport["departure_airport_name"].iloc[0]}')
        ax2.axvline(datetime.datetime(2020, 3, 11), linestyle='--', alpha=0.75, color='grey')

        # ax2.set_title(f'{grp["departure_airport_name"].iloc[0]}')
    
        # Set tick label size
        ax2.tick_params(axis='both', which='major', labelsize=18)
        ax2.tick_params(axis='y', which='minor', labelsize=18)

        # Set scale and tick format
        ax2.set_xlim((datetime.date(2019, 1, 1), datetime.date(2021, 1, 1)))
        ax2.xaxis.set_major_formatter(mdates.DateFormatter(r'%b-%Y'))

        ax2.set_yscale('log')
        ax2.yaxis.set_major_formatter(ticker.StrMethodFormatter('{x:,.0f}'))

        if grp['total_daily_flights'].max() > 90:
            ax2.yaxis.set_minor_formatter(ticker.NullFormatter())
        else:
            ax2.yaxis.set_minor_formatter(ticker.StrMethodFormatter('{x:,.0f}'))

        ax2.set_ylabel('Log daily total flights', fontsize=20)
        ax2.legend(loc='lower left', fontsize=14)

    @staticmethod
    def image_to_base64():

        ts_plots = glob.glob('../plots/time_series/*.png')

        for plot in ts_plots:
            with open(plot, 'rb') as file:
                data = base64.b64encode(file.read())

            file_name = os.path.basename(file.name)
            with open(f'../plots/time_series_64/{os.path.splitext(file_name)[0]}.txt', 'w') as file:
                print(data, file=file)
        

# %%
if __name__ == "__main__":
    plotObj = FlightsDataViz('full_df.csv')
    plotObj.create_time_series_plots(
        plots=None, 
        style='bmh', 
        dim=(25, 10),
        out_path=True
    )

    upload_to_datastore(
        plotObj.workspace, 
        src_dir='../plots/time_series/', 
        target_path='time_series/',
        overwrite=True
    )

    # plotObj.image_to_base64()

    # upload_to_datastore(
    #     plotObj.workspace, 
    #     src_dir='../plots/time_series_64/', 
    #     target_path='time_series_64/',
    #     overwrite=False
    # )

# %%
