import React from "react";
import SpotCard from "./SpotCard";
import { Row } from "react-bootstrap";

const Spots = ({ userSpotReports, idealConditions, removeSpot }) => {
  const spots = userSpotReports.map((report, index) => {
    return (
      <SpotCard
        key={index}
        index={index}
        report={report}
        idealConditions={idealConditions.find((spot) => spot.id === report.id)}
        removeSpot={removeSpot}
      />
    );
  });
  return <Row className="spot-list">{spots}</Row>;
};

export default Spots;
