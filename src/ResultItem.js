import React from "react";

const ResultItem = ({ spot, index, addNewSpot }) => {
  const handleClick = () => {
    addNewSpot(spot._id);
  };

  const location = spot._source.breadCrumbs.join(", ");

  return (
    <li key={spot._id} index={index} value={spot._id} onClick={handleClick}>
      {spot._source.name} - {location}
    </li>
  );
};

export default ResultItem;
