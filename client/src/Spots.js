import React from "react";
import SpotCard from "./SpotCard";
import { Row } from "react-bootstrap";

const Spots = ({ userSpotReports, idealConditions, removeSpot }) => {
  const spots = userSpotReports.map((report, index) => {
    const conditions = idealConditions.find((spot) => spot.id === report.id);
    return (
      <SpotCard
        key={index}
        index={index}
        report={report}
        idealConditions={conditions ? conditions : false}
        removeSpot={removeSpot}
      />
    );
  });
  return <Row className="spot-list">{spots}</Row>;
};

export default Spots;
