import React from "react";
import CardBody from "./CardBody";
import { Card } from "react-bootstrap";
import Tide from "./icons/high-tide.svg";
import Wind from "./icons/wind.svg";

const IdealConditions = ({ humanAnalysis }) => {
  const cardSubtitle = "SwellPlus Analysis";
  const swellText = humanAnalysis.swells.map((swell, index) => {
    return (
      <li key={index}>
        {swell.swell.height} ft. at {swell.swell.period}s{" "}
        {swell.swell.direction}º<br></br>
        {swell.analysis}
      </li>
    );
  });

  const tideText = (
    <Card.Text>
      <img className="spot-icon" src={Tide} alt="Wave"></img>
      {humanAnalysis.tide}
    </Card.Text>
  );

  const windText = (
    <Card.Text>
      <img className="spot-icon" src={Wind} alt="Wave"></img>
      {humanAnalysis.wind.direction} {humanAnalysis.wind.speed}
    </Card.Text>
  );

  return (
    <CardBody
      cardSubtitle={cardSubtitle}
      tideText={tideText}
      windText={windText}
      swellText={swellText}
    />
  );
};

export default IdealConditions;
