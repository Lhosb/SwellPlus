import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Wave from "./icons/beach.svg";
import Tide from "./icons/high-tide.svg";
import Water from "./icons/water-temperature.svg";
import Wind from "./icons/wind.svg";
import Weather from "./icons/cloudy.svg";

const SpotCard = ({
  index,
  name,
  tide,
  swells,
  waveHeight,
  wind,
  waterTemp,
  weather,
  units,
  removeSpot,
}) => {
  const swell = swells.map((swell) => {
    if (swell.height && swell.period > 0) {
      return (
        <li>
          {swell.height} ft. at {swell.period}s {swell.direction}º
        </li>
      );
    }
  });

  const handleClose = () => {
    removeSpot(index);
  };

  return (
    <Col lg={4} md={"auto"} sm={"auto"}>
      <Card
        bg="primary"
        border="primary"
        text="light"
        className="spot-card box"
      >
        <Card.Header>
          {name}
          <Button onClick={handleClose} style={{ float: "right" }}>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </Card.Header>
        <Card.Body>
          <Card.Subtitle>Surfline Report</Card.Subtitle>
          <br />
          <div className="data-grid">
            <div className="col">
              <Card.Text>
                <img className="spot-icon" src={Wave} alt="Wave"></img>{" "}
                {waveHeight.min}-{waveHeight.max} {units.waveHeight}.{" "}
              </Card.Text>
              <Card.Text>
                <img className="spot-icon" src={Tide} alt="Wave"></img>{" "}
                {tide.current.height} {units.tideHeight}.{" "}
                <FontAwesomeIcon
                  icon={
                    tide.current.height > tide.next.height
                      ? faArrowDown
                      : faArrowUp
                  }
                />
              </Card.Text>
              <Card.Text>
                <img className="spot-icon" src={Wind} alt="Wave"></img>{" "}
                {wind.speed} {units.windSpeed}. @ {wind.direction}°
              </Card.Text>
            </div>
            <div className="col">
              <Card.Text>
                <img className="spot-icon" src={Water} alt="Wave"></img>{" "}
                {waterTemp.min}-{waterTemp.max}°{units.temperature}
              </Card.Text>
              <Card.Text>
                <img className="spot-icon" src={Weather} alt="Wave"></img>{" "}
                {weather.temperature}°{units.temperature}
              </Card.Text>
            </div>
          </div>
          <div className="swell-data">
            <div className="swells-header">Swells</div>
            <ul className="swell-list">{swell}</ul>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SpotCard;
