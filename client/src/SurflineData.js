import React from "react";
import CardBody from "./CardBody";
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
  const cardSubtitle = "Surfline Report";

  const swellText = swells.map((swell, index) => {
    if (swell.height && swell.period > 0) {
      return (
        <li key={index}>
          {swell.height} ft. at {swell.period}s {swell.direction}º
        </li>
      );
    }
  });

  const waveText = (
    <Card.Text>
      <img className="spot-icon" src={Wave} alt="Wave"></img>
      {waveHeight.min}-{waveHeight.max} {units.waveHeight}.
    </Card.Text>
  );

  const tideText = (
    <Card.Text>
      <img className="spot-icon" src={Tide} alt="Wave"></img>
      {tide.current.height} {units.tideHeight}.
      <FontAwesomeIcon
        icon={tide.current.height > tide.next.height ? faArrowDown : faArrowUp}
      />
    </Card.Text>
  );

  const windText = (
    <Card.Text>
      <img className="spot-icon" src={Wind} alt="Wave"></img> {wind.speed}
      {units.windSpeed}. @ {wind.direction}°
    </Card.Text>
  );

  const waterText = (
    <Card.Text>
      <img className="spot-icon" src={Water} alt="Wave"></img>
      {waterTemp.min}-{waterTemp.max}°{units.temperature}
    </Card.Text>
  );

  const weatherText = (
    <Card.Text>
      <img className="spot-icon" src={Weather} alt="Wave"></img>
      {weather.temperature}°{units.temperature}
    </Card.Text>
  );

  return (
    <CardBody
      cardSubtitle={cardSubtitle}
      waveText={waveText}
      tideText={tideText}
      windText={windText}
      waterText={waterText}
      weatherText={weatherText}
      swellText={swellText}
    />
  );
};

export default SurflineData;
