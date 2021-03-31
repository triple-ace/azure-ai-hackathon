#%%
import pandas as pd
import os
from azureml.core import Workspace, Dataset, workspace

workspace = Workspace.from_config()

# covid_path = 'https://api.covidtracking.com/v1/states/daily.csv'
# covid = Dataset.Tabular.from_delimited_files(path=covid_path)
# covid.take(3).to_pandas_dataframe()

# %%
weather_ds = Dataset.get_by_name(workspace, name='all_weather')
covid_ds = Dataset.get_by_name(workspace, name='us_state_covid')
airlines_ds = Dataset.get_by_name(workspace, name='airline_list')
airports_ds = Dataset.get_by_name(workspace, name='airport_list')
flights_ds = Dataset.get_by_name(workspace, name='all_flights')

# %%
weather = weather_ds.to_pandas_dataframe()
covid = covid_ds.to_pandas_dataframe()
airlines = airlines_ds.to_pandas_dataframe()
airports = airports_ds.to_pandas_dataframe()
flights = flights_ds.to_pandas_dataframe()


# %% Read weather data
weather = pd.read_csv(r'../../data/weather/all_weather.csv')

# %% Read covid data
covid = pd.read_csv(r'../../data/covid/us_state_covid.csv')

# %% Read airport data
airlines = pd.read_csv(r'../../data/airport/Airline_list.csv')
airports = pd.read_csv(r'../../data/airport/Airport_list.csv')
flights = pd.read_csv(r'../../data/airport/All_flights.csv')

# %% Calculate percent missing/null for each column
weather.apply(lambda x: sum(x.isnull())/x.fillna(0).count())

# %%
weather.info()
weather.drop(columns=['Unnamed: 0', 'address', 'info', 'resolvedAddress', 'name'], inplace=True)
# %%
weather['datetime'] = pd.to_datetime(weather['datetime'], format=r'%m/%d/%Y')

# %%
covid['date'] = pd.to_datetime(covid['date'], format=r'%Y-%m-%d')

# %% Calculate percent missing/null for each column
covid.apply(lambda x: sum(x.isnull())/x.fillna(0).count())

# %%
flights.drop(index=)
flights.apply(lambda x: sum(x.isnull())/x.fillna(0).count())
# %%
