from azureml.core import Workspace
import os

ws = Workspace.from_config()
datastore = ws.get_default_datastore()
datastore.upload_files(
	file=rf'{os.getcwd()}\..\..\data\us_state_covid.csv', 
	target_path=r'datasets/us_state_covid', overwrite=True
)

from azure.storage.blob import BlockBlobService
from azure.storage.blob import ContentSettings

block_blob_service = BlockBlobService(account_name='<myaccount>', account_key='mykey')
block_blob_service.create_container('mycontainer')

#Upload the CSV file to Azure cloud
block_blob_service.create_blob_from_path(
    'mycontainer',
    'myblockblob.csv',
    'test.csv',
    content_settings=ContentSettings(content_type='application/CSV')
)

# Check the list of blob
generator = block_blob_service.list_blobs('mycontainer')
for blob in generator:
    print(blob.name)

# Download the CSV file From Azure storage
block_blob_service.get_blob_to_path('mycontainer', 'myblockblob.csv', 'out-test.csv')

