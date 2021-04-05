import pandas as pd
from azureml.core import Workspace

def upload_to_datastore(workspace, src_dir, target_path, overwrite=False):
	datastore = workspace.get_default_datastore()

	# upload the local file from src_dir to the target_path in default datastore
	datastore.upload(src_dir=src_dir, target_path=target_path, overwrite=overwrite)

if __name__ == '__main__':
	workspace = Workspace.from_config()
	upload_to_datastore(
		workspace, 
		src_dir='../../data/final_data/', 
		target_path=''
	)