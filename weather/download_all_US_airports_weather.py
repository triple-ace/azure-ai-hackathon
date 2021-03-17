import pandas as pd
import historical_weather_download

#read in list of airports
df_airports = pd.read_csv("C:/Users/ashmui/Documents/GitHub/azure-ai-hackathon/airports_list.csv"
                          ,names=['longname','city','country','airport_code','alt_code','lat','long'
                                  ,'rand0','rand1','rand2','region','buildingType','rand3'])

#american airports
df_us=df_airports[(df_airports.country=="United States")]

#loop through all American airports and download
for i in range(len(df_us)):
#for i in range(5):    
    print df_us['airport_code'].iloc[i]
    
    output_weather_df=historical_weather_download.main(
            outputDir='C:/Users/ashmui/Documents/GitHub/azure-ai-hackathon/weather/'
            ,airportCode=df_us['airport_code'].iloc[i]
            ,latitude=df_us['lat'].iloc[i]
            ,longitude=df_us['long'].iloc[i]
            ,aggregateHours=24
            ,startDate="2019-01-01"
            ,endDate="2019-12-31")
    
    output_weather_df=historical_weather_download.main(
            outputDir='C:/Users/ashmui/Documents/GitHub/azure-ai-hackathon/weather/'
            ,airportCode=df_us['airport_code'].iloc[i]
            ,latitude=df_us['lat'].iloc[i]
            ,longitude=df_us['long'].iloc[i]
            ,aggregateHours=24
            ,startDate="2020-01-01"
            ,endDate="2020-12-31")