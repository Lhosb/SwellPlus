import React from "react";
import { Card } from "react-bootstrap";

const CardBody = ({
  cardSubtitle,
  waveText,
  tideText,
  windText,
  waterText,
  weatherText,
  swellText,
}) => {
  const temps = (
    <div className="col">
      {waterText}
      {weatherText}
    </div>
  );
  return (
    <div>
      <Card.Subtitle>{cardSubtitle}</Card.Subtitle>
      <br />
      <div className="data-grid">
        <div className="col">
          {waveText}
          {tideText}
          {windText}
        </div>
        {waterText && weatherText ? temps : <div />}
      </div>
      <div className="swell-data">
        <div className="swells-header">Swells</div>
        <ul className="swell-list">{swellText}</ul>
      </div>
    </div>
  );
};

export default CardBody;
