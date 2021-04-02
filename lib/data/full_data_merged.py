#%%
import pandas as pd
import numpy as np
import re
from azureml.core import Workspace, Dataset, workspace

workspace = Workspace.from_config()

# %% Get datasets from ML workspace
weather = Dataset.get_by_name(workspace, name='all_weather')
covid = Dataset.get_by_name(workspace, name='us_state_covid')
flights = Dataset.get_by_name(workspace, name='all_flights')

# %% Convert to pandas dataframes
weather = weather.to_pandas_dataframe().iloc[:, 1:]
covid = covid.to_pandas_dataframe()
flights = flights.to_pandas_dataframe().iloc[:, 1:]

# %% Percent null function
def percent_null(df):
	return df.apply(lambda x: sum(x.isnull())/x.fillna(0).count())

def strip_str_cols(df):
	df_str_cols = df.dtypes == object
	df.loc[:, df_str_cols] = df.loc[:, df_str_cols].apply(lambda x: x.str.strip())

# %% Weather data
weather.info()
# Calculate percent missing/null for each column and drop unwanted columns
percent_null(weather)

# weather.drop(columns=['Column2'], inplace=True)
weather.rename(columns=lambda x: x.lower(), inplace=True)

# %% Covid data
covid['date'] = pd.to_datetime(covid['date'], format=r'%Y%m%d')

covid.info()
# Calculate percent missing/null for each column
percent_null(covid)

strip_str_cols(covid)

# %% Flights data
flights.info()
percent_null(flights)

# Clean flight column names
flights.rename(columns={'Date_(MM/DD/YYYY)': 'date'}, inplace=True)
flights.rename(columns=lambda x: re.sub(r'^(.+)_\((.+)\)$', r'\1_\2', x.lower()), inplace=True)
flights.rename(columns=lambda x: x.strip().replace(r' ', '_'), inplace=True)
flights.rename(columns={
	'city': 'destination_city', 
	'state': 'destination_state', 
	'airport_code': 'destination_airprt_code',
	'airport_name': 'destination_airprt_name'
}, inplace=True)

flights = flights.drop(
	columns=[
		'carrier_code', 'flight_number', 'departure_airprt_code',
		'scheduled_elapsed_time_minutes', 'actual_elapsed_time_minutes',
		'taxi-out_time_minutes', 
		'tail_number', 'destination_airport', 'scheduled_departure_time',
		'actual_departure_time', 'wheels-off_time', 'destination_airprt_code',
		'destination_city', 'destination_state', 'destination_airprt_name'
	]
).iloc[:-1,]

strip_str_cols(flights)
# flights['flight_number'] = flights['flight_number'].apply(lambda x: re.sub(r'\.\d+$', '', x))

# %% Aggregate by date and departure airport
flights_grp = flights.groupby(by=['date' , 'departure_state', 'departure_airport'])

flights_agg = flights_grp.agg(
	total_daily_flights=('year', 'count'),
	avg_delay_carrier=('delay_carrier_minutes', np.mean),
	avg_delay_weather=('delay_weather_minutes', np.mean),
	avg_national_avi_system=('delay_national_aviation_system_minutes', np.mean),
	avg_delay_security=('delay_security_minutes', np.mean),
	avg_delay_late_aircraft=('delay_late_aircraft_arrival_minutes', np.mean),
	departure_airport_name=('departure_airport_name', 'first')
).reset_index()

# %% Join data with validation
full_df = pd.merge(
	flights_agg, covid, how='left', 
	left_on=['date', 'departure_state'], right_on=['date', 'state'], 
	validate='many_to_one'
).drop(columns=['state'])

full_df = pd.merge(
	full_df, weather, how='left', 
	left_on=['date', 'departure_airport'], right_on=['date', 'airport_code'], 
	validate='many_to_one'
).drop(columns=['airport_code'])

# Write to local storage
full_df.to_csv('../../data/final_data/full_df.csv')

# upload the local file from src_dir to the target_path in default datastore
datastore = workspace.get_default_datastore()
datastore.upload(src_dir='../../data/final_data/', target_path='')

