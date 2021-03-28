from azureml.core import Workspace

subscription_id = '827fa41c-0ef8-45c7-ad06-71f6c75f642f'
resource_group  = 'rg-azureaihack'
workspace_name  = 'azureaihack'

try:
    ws = Workspace(subscription_id = subscription_id, resource_group = resource_group, workspace_name = workspace_name)
    ws.write_config()
    print('Library configuration succeeded')
except:
    print('Workspace not found')