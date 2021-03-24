import pandas as pd
import historical_weather_download

#read in list of airports from the list with latitudes
df_airports = pd.read_csv("C:/Users/ashmui/Documents/GitHub/azure-ai-hackathon/airports_list.csv"
                          ,names=['longname','city','country','airport_code','alt_code','lat','long'
                                  ,'rand0','rand1','rand2','region','buildingType','rand3'])

#american airports
df_us = df_airports[(df_airports.country=="United States")]


#read in list of top airports that we are actually using
df_filtered_airports = pd.read_csv("C:/Users/ashmui/Documents/GitHub/azure-ai-hackathon/filtered_airport_codes.csv"
                                   ,names=['state','airport_name','data_source_id','ranking','rand1','rand2','rand3'
                                  ,'rand4','rand5','airport_code'],skiprows=1)

df_filtered_airports = df_filtered_airports[(df_filtered_airports.airport_code != "FALSE")]

final_airport_list = pd.merge(df_us, df_filtered_airports, on= "airport_code", how= "inner")


print ("There are " + str(len(final_airport_list) ) + " airports to download 2 years of data for.")

full_weather_list=[]

#output_weather_df=historical_weather_download.main(
#         weather_list=full_weather_list
#        ,outputDir='C:/Users/ashmui/Documents/GitHub/azure-ai-hackathon/weather/data'
#        ,airportCode="ATL"
#        ,latitude=33.6367
#        ,longitude=-84.428101
#        ,aggregateHours=24
#        ,startDate="2019-01-01"
#        ,endDate="2019-12-31"
#        )


#loop through all American airports and download

for i in range(len(df_us)):
#for i in range(5):    
    print ( final_airport_list['airport_code'].iloc[i] )
    
    output_weather_df=historical_weather_download.main(
            weather_list=full_weather_list
            ,outputDir='C:/Users/ashmui/Documents/GitHub/azure-ai-hackathon/weather/data'
            ,airportCode=final_airport_list['airport_code'].iloc[i]
            ,latitude=final_airport_list['lat'].iloc[i]
            ,longitude=final_airport_list['long'].iloc[i]
            ,aggregateHours=24
            ,startDate="2019-01-01"
            ,endDate="2019-12-31")
    
    
    
    output_weather_df=historical_weather_download.main(
            weather_list=full_weather_list
            ,outputDir='C:/Users/ashmui/Documents/GitHub/azure-ai-hackathon/weather/data'
            ,airportCode=final_airport_list['airport_code'].iloc[i]
            ,latitude=final_airport_list['lat'].iloc[i]
            ,longitude=final_airport_list['long'].iloc[i]
            ,aggregateHours=24
            ,startDate="2020-01-01"
            ,endDate="2020-12-31")
    
res = pd.concat(full_weather_list, ignore_index=True)  # concatenate list of dataframes

res.to_csv('C:/Users/ashmui/Documents/GitHub/azure-ai-hackathon/weather/data/all_weather.csv')
    
