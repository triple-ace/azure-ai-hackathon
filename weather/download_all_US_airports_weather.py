import pandas as pd
import dataFrame as df

#loop through all American airports and download

#read in list of airports
df_airports = pd.read_csv("C:/Users/ashmui/Documents/GitHub/azure-ai-hackathon/airports_list.csv"
                          ,names=['longname','country','shortname','airport_code','alt_code','lat','long'
                                  ,'rand','rand2','region','buildingType','rand3'])

#american airports
df_us=df[(df_airports.country=="United States")]