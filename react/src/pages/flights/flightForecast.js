import { Ts_plots } from './flightsSubPage/ts_plots'

function Flight() {
    return (
        <div >
            <div className="leftcolumn">
                <div className="card">
                    <h2 style={{ textAlign: "center" }}>COVID-19 Impact to Flights by State</h2>
                    <p style={{ textAlign: "center", color: "gray" }}>Explore how COVID-19 impacted flights by selecting states below</p>
                    <Ts_plots/>
                    <p>Explain here...</p>
                </div>
                <div className="card">
                    <h2>Another Flight Forecast</h2>
                    <h5>description</h5>
                    <div className="fakeimg" style={{ height: "200px" }}>Image</div>
                    <p>Explain here...</p>
                </div>
            </div>
            <div className="rightcolumn">
                <div className="card">
                <h4>Questions to answer:</h4>
                <ol>
                    <li>How has the pandemic impacted travels?</li>
                    <li>What will future travels look like post-pandemic?</li>
                </ol>
            </div>
            <div className="card">
                <h3>Models we used</h3>
                <div className="fakeimg">
                    <p>Image</p>
                </div>
                <div className="fakeimg">
                    <p>Image</p>
                </div>
                <div className="fakeimg">
                    <p>Image</p>
                </div>
            </div>
            <div className="card">
 
                <h2>Sources</h2>
                    <div>
                        <ul>
                            <li>
                                <a 
                                    href="https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/Coronavirus_2019_nCoV_Cases/FeatureServer/1/query" 
                                    target="_blank"
                                    rel="noreferrer">
                                    ArcGIS Coronavirus_2019_nCoV_Cases
                                </a>
                            </li>
                        <li>
                            <a
                                href="https://rapidapi.com/visual-crossing-corporation-visual-crossing-corporation-default/api/visual-crossing-weather"
                                target="_blank"
                                rel="noreferrer">
                                    Visual Crossing Weather Rapid API 
                            </a>
                        </li>
            </ul>
                </div>
            </div>
        </div>
      </div >
    )
}

export { Flight };