import pandas as pd
from azureml.core import Workspace, Dataset

def read_from_datastore(workspace, file_path):
	datastore = workspace.get_default_datastore()

	# create a dataset referencing the cloud location
	data = Dataset.Tabular.from_delimited_files(path = [(datastore, (file_path))])
	data = data.to_pandas_dataframe().iloc[:, 1:]
	
	return data

if __name__ == "__main__":
	workspace = Workspace.from_config()
	print(read_from_datastore(workspace, 'full_df.csv'))