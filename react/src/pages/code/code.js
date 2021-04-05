import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { useState } from 'react'


function CodePreCovid() {
    const [model1, setmodel1] = useState("")
    const [model2, setmodel2] = useState("none")

    function showModel1() {
        setmodel1(""); setmodel2("none"); 
    }
    function showModel2() {
        setmodel1("none"); setmodel2(""); 
    }


    return (
        <div style={{ width: "100%" }}>
            <ButtonGroup aria-label="Basic example" size="sm" style={{ width: "40vw" }}>
                <Button variant="secondary" onClick={showModel1}>Pre-Pandemic Flight Code</Button>
                <Button variant="secondary" onClick={showModel2}>Flights during Pandemic Code</Button>
            </ButtonGroup>
            <iframe
                style={{ display: model1, width: "100%", height: "70vh" }}
                src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/Jupyer_output/Flights_model_noncovid.html">
            During Covid</iframe>
            <iframe
                style={{ display: model2, width: "100%", height: "70vh" }}
                src="https://azurehackml9055174488.blob.core.windows.net/azureml-blobstore-d146e7e5-f80e-4c11-8fc8-7d128f839d1b/Jupyer_output/Flights_model_covid.html">
            During Covid</iframe>
        </div>
    )
}

export { CodePreCovid };