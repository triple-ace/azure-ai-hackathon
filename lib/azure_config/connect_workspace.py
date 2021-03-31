import os
from azureml.core import Workspace
from azureml.core.authentication import InteractiveLoginAuthentication

subscription_id= "62be4346-38b4-49ff-b13c-2cb011f69ac6"
resource_group= "azurehack-rg"
workspace_name= "azurehack-ml"
interactive_auth = InteractiveLoginAuthentication(tenant_id="7c2deb9f-4445-4574-af27-f9ffd09af97a", force=True)

try:
    ws = Workspace(
		subscription_id=subscription_id,
        resource_group=resource_group,
        workspace_name=workspace_name,
        auth=interactive_auth)
    ws.write_config()
    print("Found workspace {} at location {}".format(ws.name, ws.location))
except:
    print('Workspace not found')