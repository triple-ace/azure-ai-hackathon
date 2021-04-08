# Microsoft Azure AI Hackathon 2021

# Inspiration
We love travel but have been grounded at home because of COVID. We were interested in how many US flights were also grounded as a result of the global pandemic.

# What it does
We built an Azure-hosted web app that explores how COVID affected the number of flights leaving major airports in the US. It also estimates the number of flights impacted during the pandemic for Hartsfield Jackson International Airport in Atlanta, GA.

- Link to our [web app](tripleacesstatic.z13.web.core.windows.net)
- Link to our [submission](https://devpost.com/software/triple-a-s-project)

# How we built it
We used the Azure Web App service to host our web app.

The Azure-hosted Web App was built using React Web, primarily using Reactstrap to use the bootstrap components to build the interface.

The HTML file was stored it in Azure blob store. We created a static web app to host. All code is pushed into the repo and the app was built from the main branch React file.

We used the Azure Python SDK and Azure AutoML Forecasting functionality to access data and build our models.

For the visualizations, we used Pandas for data manipulation, Matplotlib for plotting, Seaborn for the visualizations color palette, and the Python SDK to upload the plots to blob storage.
