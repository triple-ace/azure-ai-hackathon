# %% [markdown]
# ## Get COVID-19 Data

# %%
# Load packages
from rich import pretty, inspect, traceback
from rich.console import Console
import requests
import pandas as pd

# Pretty print data structures
console = Console()
pretty.install()
traceback.install()

# %%
BASE_URL = "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/Coronavirus_2019_nCoV_Cases/FeatureServer/1/query?"
RESPONSE_FORMAT = "json"
OUT_FIELDS = "*"
OUT_SR = "4326"
WHERE = "Country_Region='US'"

url_request = requests.get(f"{BASE_URL}where={WHERE}&outFields={OUT_FIELDS}&outSR={OUT_SR}&f={RESPONSE_FORMAT}")
url_json = url_request.json()
df = pd.DataFrame(url_json['features'])
# print(url_json['features'])
console.print(df)

# %%
# Transform column objects to data
data_list = df['attributes'].tolist()
data = pd.DataFrame(data_list)
console.print(data)

# %%



