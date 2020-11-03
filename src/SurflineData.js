import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Wave from "./icons/beach.svg";
import Tide from "./icons/high-tide.svg";
import Water from "./icons/water-temperature.svg";
import Wind from "./icons/wind.svg";
import Weather from "./icons/cloudy.svg";

const SurflineData = ({
  index,
  name,
  tide,
  swells,
  waveHeight,
  wind,
  waterTemp,
  weather,
  units,
}) => {
  const swell = swells.map((swell, index) => {
    if (swell.height && swell.period > 0) {
      return (
        <li key={index}>
          {swell.height} ft. at {swell.period}s {swell.direction}º
        </li>
      );
    }
  });

  return (
    <div>
      <Card.Subtitle>Surfline Report</Card.Subtitle>
      <br />
      <div className="data-grid">
        <div className="col">
          <Card.Text>
            <img className="spot-icon" src={Wave} alt="Wave"></img>
            {waveHeight.min}-{waveHeight.max} {units.waveHeight}.
          </Card.Text>
          <Card.Text>
            <img className="spot-icon" src={Tide} alt="Wave"></img>
            {tide.current.height} {units.tideHeight}.
            <FontAwesomeIcon
              icon={
                tide.current.height > tide.next.height ? faArrowDown : faArrowUp
              }
            />
          </Card.Text>
          <Card.Text>
            <img className="spot-icon" src={Wind} alt="Wave"></img> {wind.speed}
            {units.windSpeed}. @ {wind.direction}°
          </Card.Text>
        </div>
        <div className="col">
          <Card.Text>
            <img className="spot-icon" src={Water} alt="Wave"></img>
            {waterTemp.min}-{waterTemp.max}°{units.temperature}
          </Card.Text>
          <Card.Text>
            <img className="spot-icon" src={Weather} alt="Wave"></img>
            {weather.temperature}°{units.temperature}
          </Card.Text>
        </div>
      </div>
      <div className="swell-data">
        <div className="swells-header">Swells</div>
        <ul className="swell-list">{swell}</ul>
      </div>
    </div>
  );
};

export default SurflineData;
