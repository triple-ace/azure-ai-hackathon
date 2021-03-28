#%%
import requests
import pandas as pd
import os
# azureml-core of version 1.0.72 or higher is required
# azureml-dataprep[pandas] of version 1.1.34 or higher is required
from azureml.core import Workspace, Dataset

# %%
workspace = Workspace.from_config()

us_state_covid = Dataset.get_by_name(workspace, name='us_state_covid_daily')
us_state_covid.to_pandas_dataframe()

# %%
us_state_covid.info()

# %% Drop irrelevant columns
us_state_covid.drop(
	columns=[
		'dateChecked', 'lastUpdateEt', 'dateModified', 
		'checkTimeEt', 'hash', 'grade'
	],
	inplace=True
)

# %% Convert date columns to date type
us_state_covid['date'] = pd.to_datetime(us_state_covid['date'], format="%Y%m%d")

# %% Set date column as data frame index
us_state_covid.set_index(['date', 'state'], inplace=True)

# %% Write to data folder
us_state_covid.to_csv(rf'{os.getcwd()}\..\..\data\us_state_covid.csv', header=True)


# %%
