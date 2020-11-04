import React from "react";
import ResultItem from "./ResultItem";

const Results = ({ searchResults, addNewSpot }) => {
  return (
    <ul className="search-results">
      {searchResults.map((spot, index) => (
        <ResultItem
          key={index}
          spot={spot}
          index={index}
          addNewSpot={addNewSpot}
        />
      ))}
    </ul>
  );
};

export default Results;
