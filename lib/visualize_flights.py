# %% Load modules
import numpy as np
import pandas as pd
from matplotlib import pyplot as plt
import datetime
from azureml.core import Workspace, Dataset
import tempfile
from IPython.display import HTML

from read_from_datastore import read_from_datastore

# %% Create data viz class
class FlightsDataViz():

	def __init__(self, file_path):
		self.workspace = Workspace.from_config()
		self.datastore = self.workspace.get_default_datastore()
		self.data = read_from_datastore(self.workspace, file_path)
		self.data_grped = None

	def set_data_grp(self, grp_vars):
		self.data_grped = self.data.groupby(grp_vars)

	def create_time_series_plots(self, plots):
		plt.style.use('seaborn')

		if isinstance(plots, int):
			pass

		targets = list(self.data_grped[:plots])
		for i, (key, grp) in enumerate(targets):
			airports = grp['departure_airport'].nunique()
			airport_grp = grp.groupby(['departure_airport'])

			fig, axs = plt.subplots(figsize=(10, 30),
									nrows=airports + 1, ncols=1,
									gridspec_kw=dict(hspace=0.5))

			targets = zip(list(airport_grp), [axs[i:i+2] for i in range(0, len(axs), 2)])
			for i, ((key, grp), (ax1, ax2)) in enumerate(targets):
				ax1.plot(grp['date'], grp['total_daily_flights'], label='total_daily_flights')
				ax1.set_title(f'{grp["departure_airport_name"].iloc[0]}')
				ax1.set_ylabel('Total daily flights')
				ax1.set_xlim((datetime.date(2019, 1, 1), datetime.date(2021, 1, 1)))
				ax1.set_yscale('log')

				ax2.plot(grp['date'], grp['positive'], label='positive')
				ax2.set_title(f'{grp["departure_state"].iloc[0]}')
				ax2.set_ylabel('Positive cases')
				ax2.set_xlim((datetime.date(2019, 1, 1), datetime.date(2021, 1, 1)))
				# ax1.legend()

			plt.xscale()
			plt.tight_layout()
			plt.show()

# %%
if __name__ == "__main__":
	plotObj = FlightsDataViz('full_df.csv')
	plotObj.set_data_grp(['departure_airport'])
	plotObj.create_time_series_plots()

	plotObj.set_data_grp(['departure_state'])
	plotObj.create_time_series_plots()
# %%
