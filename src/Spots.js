import React from "react";
import SpotCard from "./SpotCard";
import { Row } from "react-bootstrap";

const Spots = ({ userSpotReports, removeSpot }) => {
  const spots = userSpotReports.map((report, index) => {
    return (
      <SpotCard
        key={index}
        index={index}
        name={report.spot.name}
        tide={report.forecast.tide}
        swells={report.forecast.swells}
        waveHeight={report.forecast.waveHeight}
        wind={report.forecast.wind}
        waterTemp={report.forecast.waterTemp}
        weather={report.forecast.weather}
        units={report.units}
        removeSpot={removeSpot}
      />
    );
  });
  return <Row className="spot-list">{spots}</Row>;
};

export default Spots;

// const report = {forecast:
//     conditions: {human: true, value: "FAIR", expired: false, sortableCondition: 7},
//     note: null,
//     swells: (6) [{…}, {…}, {…}, {…}, {…}, {…}],
//     tide: {previous: {…}, current: {…}, next: {…}},
//     waterTemp: {min: 68, max: 70},
//     waveHeight: {human: true, min: 3, max: 5, occasional: null, humanRelation: "Waist to head high", …},
//     weather: {temperature: 61, condition: "NIGHT_CLEAR_NO_RAIN"},
//     wind: {speed: 3, direction: 192.01}
//   }
