import { TsPlots } from './flightsSubPage/ts_plots'
import {AzureMLplots} from './flightsSubPage/azure_ml'
import React from 'react';
import { MeetTheTeam } from "./flightsSubPage/about"


function Flight() {
    return (
        <div >
            <div className="leftcolumn">
                <div className="card">
                    <h2 style={{ textAlign: "center" }}>Daily Flight Models using Azure AutoML</h2>
                    <AzureMLplots/>
                </div>
                <div className="card">
                    <h2 style={{ textAlign: "center" }}>COVID-19 Impact to Flights by State</h2>
                    <p style={{ textAlign: "center", color: "gray" }}>Explore how COVID-19 impacted flights by selecting states below</p>
                    <TsPlots />
                </div>

            </div>
            <div className="rightcolumn">
                <div className="card">
                    <h5>Questions to Answer:</h5>
                    <ol style={{fontSize:"small"}}>
                        <li>How has the pandemic impacted travels?</li>
                        <li>What will future travels look like post-pandemic?</li>
                    </ol>
                </div>
                <div className="card">
                    <h5>Models we used:</h5>
                    <div  style={{fontSize:"small"}}>
                    <p>
                        For our modeling we focused on Hartsfield-Jackson International Airport (ATL) in Atlanta, GA.  Prior to COVID-19, it was the world’s busiest airport by passenger traffic.
                    </p>
                    <p>Two models were created:</p>
                    <ol>
                        <li>Model based on pre-COVID flight patterns</li>
                        <li>Model based on COVID flight patterns</li>
                    </ol>
                    </div>
                </div>
                <div className="card">

                    <h4>Sources</h4>
                    <div>
                        <ul  style={{fontSize:"small"}}>
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
                <div className="card">
                    <h4>Meet the Team</h4>
                    <MeetTheTeam/>
                </div>
            </div>
        </div >
    )
}

export { Flight };