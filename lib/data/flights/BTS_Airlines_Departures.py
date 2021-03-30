
import sys
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import re
import pandas as pd
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import NoSuchElementException

# url = 'https://www.transtats.bts.gov/ONTIME/Departures.aspx'
# variable =0




# create a new Chrome session
# driver= webdriver(browser=("chrome"), chromever="78.0.3904.97")

driver = webdriver.Chrome(executable_path= r'C:\\Python_code\\ChromeDriver89\\chromedriver.exe')

# driver = webdriver.Chrome()

url = 'https://www.transtats.bts.gov/ONTIME/Departures.aspx'
# variable =0
# variable2 =0
driver.implicitly_wait(10)
driver.get(url)

Stats = driver.find_element_by_id('chkAllStatistics').click()


Months = driver.find_element_by_id('chkAllMonths').click()


Days = driver.find_element_by_id('chkAllDays').click()

#the below elements are covered by something or could be way inside a table hence require execute
# Days = driver.find_element_by_xpath('//*[@id="chkAllDays"]')
# driver.execute_script("arguments[0].click();", Days)


Year20 = driver.find_element_by_id('chkYears_33')
Year19 = driver.find_element_by_id('chkYears_32')

driver.execute_script("arguments[0].click();", Year20)
driver.execute_script("arguments[0].click();", Year19)


def get_excel():
 Submit = driver.find_element_by_xpath('//*[@id="btnSubmit"]')
 driver.implicitly_wait(10)
 driver.execute_script("arguments[0].click();", Submit)
 driver.implicitly_wait(10)
 try:
        Save= driver.find_element_by_xpath('//*[@id="DL_CSV"]')
        
        driver.implicitly_wait(10)
        driver.execute_script("arguments[0].click();", Save)
        driver.implicitly_wait(30)    
 except NoSuchElementException:
        print("No data")
# List of Airport id element_by_xpath the airports are being referenced on the websites

# list=[21,27,43,64,68,69,74,91,92,101,130,157,167,170,183,227,244,247,271,272,273,281,286,287,301,302,303,311,319,340,343,344,359,360,384,406,407]

list2=[9,14,18,22,24,25,30,39,40,42,50,61,65,72,80,81,82,84,85,89,93,94,99,100,131,133,144,169,171,174,175,192,193,212,215,220,232,264,267,269,270,276,284,285,292,295,296,306,307,324,326,329,330,335,342,345,346,356,362,367,368,374,380,382,383,388,391,412,416,420,422]
# while (variable2<428):
#     variable2 =variable2+1
# Airport = driver.find_element_by_xpath('//*[@id="cboAirport"]/option[42]').click()
# while (variable<33):
#  variable =variable+1 
#  Airline = driver.find_element_by_xpath("//*[@id='cboAirline']/option["+str(variable)+"]").click()
#  #.text() doesn't work on xpath
#  print(driver.find_element_by_xpath("//*[@id='cboAirline']/option["+str(variable)+"]").get_attribute("value"))
#  get_excel()
# else:
#  print("That's all folks!")
for i in list2:
    Airport = driver.find_element_by_xpath("//*[@id='cboAirport']/option["+str(i)+"]").click()
    for j in range(1,33):
        Airline = driver.find_element_by_xpath("//*[@id='cboAirline']/option["+str(j)+"]").click()
        print(driver.find_element_by_xpath("//*[@id='cboAirport']/option["+str(i)+"]").get_attribute("value"), driver.find_element_by_xpath("//*[@id='cboAirline']/option["+str(j)+"]").get_attribute("value"))
        get_excel()
   
 #Previous Attempts AKA Rough Work

 #JetBlue 
#Airline = driver.find_element_by_xpath('//*[@id="cboAirline"]/option[22]').click()
#get_excel()

#Below are alternate functions I tried which failed
# select.select_by_visible_text('DL')
#select_by_visible_text('JFK').click()

#ATAAirlines
# Airport = driver.find_element_by_xpath('//*[@id="cboAirport"]/option[266]').click()
# Airline = driver.find_element_by_xpath('//*[@id="cboAirline"]/option[1]').click()
# get_excel()
# #AirTran Airways 
# Airport = driver.find_element_by_xpath('//*[@id="cboAirport"]/option[266]').click()
# Airline = driver.find_element_by_xpath('//*[@id="cboAirline"]/option[2]').click()
# get_excel()
# #Alaska Airlines
# Airport = driver.find_element_by_xpath('//*[@id="cboAirport"]/option[266]').click()
# Airline = driver.find_element_by_xpath('//*[@id="cboAirline"]/option[3]').click()
# get_excel()
#Allegiant Air
#Airport = driver.find_element_by_xpath('//*[@id="cboAirport"]/option[266]').click()
#Airline = driver.find_element_by_xpath('//*[@id="cboAirline"]/option[4]').click()
#get_excel()
#Aloha Airlines
#Airport = driver.find_element_by_xpath('//*[@id="cboAirport"]/option[266]').click()
#Airline = driver.find_element_by_xpath('//*[@id="cboAirline"]/option[5]').click()
#get_excel()
#America West Airlines 





