import React from "react";
import SurflineData from "./SurflineData";
import IdealConditions from "./IdealConditions";
import { Col, Button, Carousel, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { analyzeData } from "./API/spotdata";

const SpotCard = ({ index, report, removeSpot, idealConditions }) => {
  const handleClose = () => {
    removeSpot(index);
  };

  const humanAnalysis = analyzeData(report, idealConditions.optimalConditions);

  return (
    <Col lg={4} md={"auto"} sm={"auto"}>
      <Card
        bg="primary"
        border="primary"
        text="light"
        className="spot-card box"
      >
        <Card.Header>
          {report.spot.name}
          <Button onClick={handleClose} style={{ float: "right" }}>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </Card.Header>

        <Carousel interval={null}>
          <Carousel.Item>
            <Card.Body>
              <SurflineData
                name={report.spot.name}
                tide={report.forecast.tide}
                swells={report.forecast.swells}
                waveHeight={report.forecast.waveHeight}
                wind={report.forecast.wind}
                waterTemp={report.forecast.waterTemp}
                weather={report.forecast.weather}
                units={report.units}
              />
            </Card.Body>
          </Carousel.Item>
          <Carousel.Item>
            <Card.Body>
              <IdealConditions humanAnalysis={humanAnalysis} />
            </Card.Body>
          </Carousel.Item>
        </Carousel>
      </Card>
    </Col>
  );
};

export default SpotCard;

// const report = {
//    forecast:
//     conditions: {human: true, value: "FAIR", expired: false, sortableCondition: 7},
//     note: null,
//     swells: (6) [{…}, {…}, {…}, {…}, {…}, {…}],
//     tide: {previous: {…}, current: {…}, next: {…}},
//     waterTemp: {min: 68, max: 70},
//     waveHeight: {human: true, min: 3, max: 5, occasional: null, humanRelation: "Waist to head high", …},
//     weather: {temperature: 61, condition: "NIGHT_CLEAR_NO_RAIN"},
//     wind: {speed: 3, direction: 192.01}
//   }
