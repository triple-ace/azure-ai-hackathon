import pandas as pd

flight_data_loc="C:/Users/ashmui/Documents/GitHub/azure-ai-hackathon/data/All_flights.csv"
wth_data_loc="C:/Users/ashmui/Documents/GitHub/azure-ai-hackathon/data/all_weather.csv"
covid_data_loc="C:/Users/ashmui/Documents/GitHub/azure-ai-hackathon/data/us_state_covid.csv"
output_data_loc="C:/Users/ashmui/Documents/GitHub/azure-ai-hackathon/data/"

# =============================================================================
# #read in flights data
# =============================================================================
df_flights = pd.read_csv(flight_data_loc)

#rename some columns
df_flights = df_flights.rename(columns={"Date_(MM/DD/YYYY)":"Date"}) 
df_flights = df_flights.rename(columns={"Unnamed: 0":"none"})

#aggregate flights by airport and day (also bring along Departure_state to be used later)
df_agg_flights=df_flights.groupby(['Departure_Airport','Date','Departure_state']).size().reset_index(name='counts') 

df_agg_flights=df_agg_flights.sort_values(by=['Departure_state','Date'])
df_agg_flights['Date']= pd.to_datetime(df_agg_flights['Date'])

#create date and time variables
df_agg_flights['DOW']=df_agg_flights['Date'].dt.day_name()
df_agg_flights['DOW_num']=df_agg_flights['Date'].dt.dayofweek
df_agg_flights['day']=df_agg_flights['Date'].dt.day
df_agg_flights['month']=df_agg_flights['Date'].dt.month_name()
df_agg_flights['month_num']=df_agg_flights['Date'].dt.month

df_agg_flights['week_of_year']=df_agg_flights['Date'].dt.weekofyear
df_agg_flights['Departure_state']=df_agg_flights['Departure_state'].str.strip()
#newer function for above
#df_agg_flights['week_of_year']=df_agg_flights['Date'].dt.isocalendar().week


# =============================================================================
# #read in weather data
# =============================================================================
df_wth = pd.read_csv(wth_data_loc)
df_wth.Date=pd.to_datetime(df_wth.Date)   


# =============================================================================
# #merge flights and weather by airport & date
# =============================================================================
df_agg_flights_wth = pd.merge(df_agg_flights, df_wth, how= "inner", left_on=['Departure_Airport','Date'], right_on=['Airport_code','Date'])


# =============================================================================
# #read in the covid data
# =============================================================================
df_covid=pd.read_csv(covid_data_loc)
df_covid.date=pd.to_datetime(df_covid.date)   

df_covid=df_covid.sort_values(by='date')

# =============================================================================
# merge flights with covid
# =============================================================================
df_agg_flights_covid=pd.merge(df_agg_flights, df_covid, how= "left", left_on=['Departure_state','Date'], right_on=['state','date'])

#fill NaN values with 0 for the entire dataframe
df_agg_flights_covid=df_agg_flights_covid.fillna(0)


# =============================================================================
# merge all datasets together
# =============================================================================
df_all=pd.merge(df_agg_flights_wth, df_agg_flights_covid, how= "inner", left_on=['Departure_Airport','Date'], right_on=['Departure_Airport','Date'])

df_all=df_all.sort_values(by=['Departure_Airport','Date'])


# =============================================================================
# ATL-only
# =============================================================================
#subset flights to just ATL
df_atl=df_all[(df_all.Departure_Airport=="ATL")]

# =============================================================================
# export to csv
# =============================================================================
df_all.to_csv(output_data_loc+"flights_covid_wth.csv")
#ATL only
df_atl.to_csv(output_data_loc+"ATL_flights_covid_wth.csv")