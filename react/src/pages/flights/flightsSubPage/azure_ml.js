import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { useState } from 'react'
import { Table } from 'reactstrap';


function AzureMLplots() {
    const [model1, setmodel1] = useState("")
    const [model2, setmodel2] = useState("none")

    function showModel1() {
        setmodel1(""); setmodel2("none"); 
    }
    function showModel2() {
        setmodel1("none"); setmodel2(""); 
    }


    return (
        <div>
            <div style={{ display: "block", marginLeft: "22%" }}>
                <ButtonGroup aria-label="Basic example" size="sm" style={{ width: "40vw" }}>
                    <Button variant="secondary" onClick={showModel1}>Pre-Pandemic Flights</Button>
                    <Button variant="secondary" onClick={showModel2}>Flights during Pandemic</Button>
                </ButtonGroup>
            </div>
            <div style={{ display: model1, borderStyle: "groove" }}>
                <h4 style={{ backgroundColor: "rgb(5, 3, 74)", color: "white", textAlign: "center" }}> Pre-Pandemic Flight</h4>
                <Table style={{ fontSize: "small" }}>
                    <tbody>
                        <tr>
                            <th scope="row">
                                Model Description
                            </th>
                            <td>
                                <ul>
                                    <li>
                                        <p style={{ margin: "2px" }}>The target variable for this model was the total daily flights leaving Hartsfield-Jackson airport. </p>
                                    </li>
                                    <li>
                                        <p style={{ margin: "2px" }}>Training Period: 1/1/2019-1/31/2020 </p>
                                    </li>
                                    <li>
                                        <p style={{ margin: "2px" }}>Test Period: 2/1/2020-2/29/2020</p>
                                    </li>
                                    <li>
                                        <p style={{ margin: "2px" }}>Model selected by AutoML: RobustScaler DecisionTree</p>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Fit Statistics
                            </th>
                            <td>
                                <p style={{ fontWeight: "bold", margin: "2px" }}>Fit Statistics (Training partition)</p>
                                <ul style={{ margin: "2px" }}>
                                    <li style={{ margin: "2px" }}>
                                        Explained variance: 0.87444
                                    </li>
                                    <li style={{ margin: "2px" }}>
                                        Mean absolute percentage error: 2.7695
                                    </li>
                                </ul>
                                <p style={{ fontWeight: "bold", margin: "2px" }}>Fit Statistics (Test partition)</p>
                                <ul style={{ margin: "2px" }}>
                                    <li style={{ margin: "2px" }}>
                                        TBD
                                    </li>
                                    <li style={{ margin: "2px" }}>
                                        TBD
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Feature Importance</th>
                            <td>
                                <p>The most important variables are mainly periodic and time-related variables such as day of week, week of year, and month.
                                    Weather factors played a smaller part.  Notably precipitation and sea level pressure played a small role in the model.</p>
                                <img
                                    style={{ width: "100%" }}
                                    src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/model_imgs/feature_imp_noncovid.JPG"
                                    alt="FeatureImportance">
                                </img>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Results</th>
                            <td>
                                <p>By running this model over the pandemic period, we can project the number of flights that would have been taken and
                                    compare this to the decreased number of flights during COVID.  Our projection takes historical weather conditions into account.</p>
                                <img
                                    style={{ width: "100%" }}
                                    src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/model_imgs/normal_daily_flights_vs_covid.jfif"
                                    alt="results">
                                </img>
                                <p>
                                    Taking the projection minus the actual, we can estimate the total number of flights grounded due to the global pandemic over the period 3/1/20 to 12/31/20.
                                </p>
                                <ul>
                                    <li>
                                        Expected (non-pandemic) flights: 382,315
                                    </li>
                                    <li>
                                        Actual pandemic flights: 233,549
                                    </li>
                                    <li>
                                        Flights grounded due to pandemic: 148,766
                                    </li>
                                    <li>
                                        Percent reduction in flights: 38%
                                    </li>

                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div style={{ display: model2, borderStyle: "groove" }}>
                <h4 style={{ backgroundColor: "rgb(5, 3, 74)", color: "white", textAlign: "center" }}> Flights During Pandemic </h4>
                <Table style={{ fontSize: "small" }}>
                    <tbody>
                        <tr>
                            <th scope="row">
                                Model Description
                            </th>
                            <td>
                                <ul>
                                    <li>
                                        <p style={{ margin: "2px" }}>The target variable for this model was the total daily flights leaving Hartsfield-Jackson airport.
                                            The difference between this model and the first model is that this one is built only on data from during the pandemic. </p>
                                    </li>
                                    <li>
                                        <p style={{margin: "2px" }}>Training Period: 3/1/2020-9/30/2020 </p>
                                    </li>
                                    <li>
                                        <p style={{ margin: "2px" }}>Test Period: 10/01/2020-12/31/2020</p>
                                    </li>
                                    <li>
                                        <p style={{ margin: "2px" }}>Model selected by AutoML: StandardScalerWrapper, DecisionTree</p>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Fit Statistics
                            </th>
                            <td>
                                <p style={{ fontWeight: "bold", margin: "2px" }}>Fit Statistics (Test partition)</p>
                                <ul style={{ margin: "2px" }}>
                                    <li style={{ margin: "2px" }}>
                                        Explained variance: 0.088376
                                    </li>
                                    <li style={{ margin: "2px" }}>
                                        Mean absolute percentage error: 14.067
                                    </li>
                                </ul>

                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Feature Importance</th>
                            <td>
                                <p>Lags of the input variables were included in the model, on the hypothesis that rising COVID metrics days in advance of a
                                scheduled flight may affect the flight.  This was done using the feature_lags='auto' setting within the Azure AutoML
                                forecast parameters specification.
                                </p>
                                <p>However, lags were not found to be highly important in the model.
                                </p>
                                <img
                                    style={{ width: "100%" }}
                                    src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/model_imgs/feature_imp_covid.JPG"
                                    alt="FeatureImportance">
                                </img>
                                <p>Apart from typical time series indicators such as day of week and weather factors such as atmospheric pressure, the Daily Increase in
                                    Hospitalizations was the 8th most important and the Daily Increase in Deaths was the 11th most important feature.</p>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Results</th>
                            <td>
                                <p style={{ margin: "2px" }}>
                                    From plotting the training data, it seems that there was a major dip in flight volume at the beginning of the pandemic.
                                    But flights did not proportionally decrease with increasing hospitalizations as the pandemic went on.
                                        </p>
                                <img
                                    style={{ width: "80%" }}
                                    src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/model_imgs/covid_model_results.jfif"
                                    alt="results">
                                </img>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div >

    )
}
export { AzureMLplots }