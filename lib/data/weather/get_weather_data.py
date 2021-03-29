# %%
from azureml.core import Workspace, Dataset

# %%
workspace = Workspace.from_config()

weather_daily = Dataset.get_by_name(workspace, name='weather_daily')
weather_daily = weather_daily.to_pandas_dataframe()
# %%
