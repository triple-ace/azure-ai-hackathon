import React from "react";
import './App.css';
import { Flight } from './pages/flights/flightForecast';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import "bootstrap/dist/css/bootstrap.min.css";
import {CodePreCovid} from './pages/code/code'




function App() {

  return (
    <div>
      <div className="header">
        <h1 style={{ marginBottom: "0" }}>FLIGHT FORECAST</h1>
        <h4 style={{ marginBottom: "0" }}> Predicting flight activity based on COVID-19 trends, weather, and national flight
            data</h4>
      </div>
      <div className="header-format">
        <img className="image-size" src="https://www.wearefinn.com/wp-content/uploads/2019/11/data-aeroplane-adobestock_66154922-min.jpg" alt="plane"/>
        <img className="image-size" src="https://i.pinimg.com/originals/c2/a6/48/c2a648ffbe423ff17918a3f48272754a.jpg" alt="plane"/>
        <img className="image-size" src="https://www.aerotime.aero/upload/files/aircraft_vector_model.jpg" alt="plane"/>
        <img className="image-size" src="https://datascience.aero/wp-content/themes/yootheme/cache/autopilot-plane-90-080573c2.jpeg" alt="plane"/>
        <img className="image-size" src="https://cdn.mos.cms.futurecdn.net/ruuTz8N3nacxJhaZVw8HwN.jpg" alt="plane"/>
        <img className="image-size" src="https://airbus-h.assetsadobe2.com/is/image/content/dam/corporate-topics/innovation/Aircraft-data-visual-IoT-internet-of-things-web-banner.jpg?wid=1920&fit=fit,1&qlt=85,0" alt="plane"/>
        <img className="image-size" src="https://www.gannett-cdn.com/-mm-/7aa3140f1d856629826269cb5e60c8b797cda0bd/c=0-160-2045-1310/local/-/media/2016/04/20/USATODAY/usatsports/thinkstockphotos-452240019.jpg?width=2045&height=1150&fit=crop&format=pjpg&auto=webp" alt="plane"/>
        <img className="image-size" src="https://www.theengineer.co.uk/content/uploads/2012/06/Airbus-concept.jpg" alt="plane"/>
        <img className="image-size" src="https://www.asme.org/getmedia/19f947fd-1c87-4548-87db-a502c684534c/Aerospace-Bets-on-Big-Data_hero.jpg.aspx?width=460&height=360&ext=.jpg" alt="plane"/>
        <img className="image-size" src="https://www.wearefinn.com/wp-content/uploads/2019/11/data-aeroplane-adobestock_66154922-min.jpg" alt="plane"/>
        <img className="image-size" src="https://i.pinimg.com/originals/c2/a6/48/c2a648ffbe423ff17918a3f48272754a.jpg" alt="plane"/>
        <img className="image-size" src="https://www.aerotime.aero/upload/files/aircraft_vector_model.jpg" alt="plane"/>
        <img className="image-size" src="https://datascience.aero/wp-content/themes/yootheme/cache/autopilot-plane-90-080573c2.jpeg" alt="plane"/>
        <img className="image-size" src="https://cdn.mos.cms.futurecdn.net/ruuTz8N3nacxJhaZVw8HwN.jpg" alt="plane"/>
        <img className="image-size" src="https://airbus-h.assetsadobe2.com/is/image/content/dam/corporate-topics/innovation/Aircraft-data-visual-IoT-internet-of-things-web-banner.jpg?wid=1920&fit=fit,1&qlt=85,0" alt="plane"/>
        <img className="image-size" src="https://www.gannett-cdn.com/-mm-/7aa3140f1d856629826269cb5e60c8b797cda0bd/c=0-160-2045-1310/local/-/media/2016/04/20/USATODAY/usatsports/thinkstockphotos-452240019.jpg?width=2045&height=1150&fit=crop&format=pjpg&auto=webp" alt="plane"/>
        <img className="image-size" src="https://www.theengineer.co.uk/content/uploads/2012/06/Airbus-concept.jpg" alt="plane"/>
        <img className="image-size" src="https://www.asme.org/getmedia/19f947fd-1c87-4548-87db-a502c684534c/Aerospace-Bets-on-Big-Data_hero.jpg.aspx?width=460&height=360&ext=.jpg" alt="plane"/>
        <img className="image-size" src="https://www.wearefinn.com/wp-content/uploads/2019/11/data-aeroplane-adobestock_66154922-min.jpg" alt="plane"/>
        <img className="image-size" src="https://i.pinimg.com/originals/c2/a6/48/c2a648ffbe423ff17918a3f48272754a.jpg" alt="plane"/>
      </div>

      <div >
        <Tabs defaultActiveKey="flight"  transition={false}>
          <Tab  eventKey="flight" title="Flight Forecast">
            <Flight/>
          </Tab>
          <Tab eventKey="code" title="Source Code">
            <CodePreCovid/>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
