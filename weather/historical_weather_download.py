import pandas as pd
import http.client

try:
    from StringIO import StringIO ## for Python 2
except ImportError:
    from io import StringIO ## for Python 3


def main(weather_list, outputDir, airportCode,latitude,longitude,aggregateHours, startDate, endDate):

    conn = http.client.HTTPSConnection("visual-crossing-weather.p.rapidapi.com")
    
    headers = {
    'x-rapidapi-key': "3ae2e484c1msh30ad0ffc3613485p1a9de1jsn90bdf10675f3",
    'x-rapidapi-host': "visual-crossing-weather.p.rapidapi.com"
    }
    
    conn.request("GET", 
                  "/history?startDateTime="+startDate
                  +"T00%3A00%3A00&aggregateHours="+str(aggregateHours)
                  +"&location="+str(latitude)+","+str(longitude)
                  +"&endDateTime="+endDate
                  +"T00%3A00%3A00&unitGroup=us&contentType=csv&shortColumnNames=True"
                  ,headers=headers)
    
    res = conn.getresponse()
    data = res.read()
    
    data=StringIO(data)
    
    weather_df = pd.read_csv(data)
    
    
    weather_df['airportName']=airportCode
    
    
    #save to a csv as well
    weather_df.to_csv(outputDir+'/'+airportCode+'_'+startDate+'_to_'+endDate+'.csv')
    
    
    #weather_df.to_csv(outputDir+'/wth_all_airports.csv', mode='a', index=False, header=False)
    
    weather_list.append(weather_df)
    
    return weather_df
    
#sample call
#output_weather_df=main(
#        outputDir='C:/Users/ashmui/Documents/GitHub/azure-ai-hackathon/weather/'
#         ,airportCode="ATL"
#         ,latitude=33.6367
#         ,longitude=-84.428101
#         ,aggregateHours=24
#         ,startDate="2019-01-01"
#         ,endDate="2019-12-31"
#)
#output_weather_df=main(
#        outputDir='C:/Users/ashmui/Documents/GitHub/azure-ai-hackathon/weather/'
#         ,airportCode="ATL"
#         ,latitude=33.6367
#         ,longitude=-84.428101
#         ,aggregateHours=24
#         ,startDate="2020-01-01"
#         ,endDate="2020-12-31"
# )