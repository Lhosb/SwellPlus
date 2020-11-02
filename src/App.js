import React, { useState, useEffect } from "react";
import Spots from "./Spots";
import Results from "./Results";
import Header from "./Header";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import { fetchSearchQuery } from "./API/api";
import { fetchSpotReport } from "./API/api";
import "./App.css";

function App() {
  const [fetchInfo, setFetchInfo] = useState({
    forcastDays: 1,
    waveIntervalHours: 6,
    windIntervalHours: 3,
  });
  const [spotIds, setSpotIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [userSpotReports, setUserSpotReports] = useState([]);

  useEffect(() => {
    getUserIds();
  }, []);

  useEffect(() => {
    return searchSpots(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    const newReports = [];
    if (spotIds.length > 0) {
      spotIds.forEach((id) => {
        fetchSpotReport(id).then((report) => {
          newReports.push(report);
        });
      });
    }
    return setUserSpotReports(newReports);
  }, [spotIds]);

  const getUserIds = () => {
    // in future have account linked to Ids table.
    //  for now, just add reef rights id
    const reefRights = "584204204e65fad6a77093cc";
    setSpotIds([reefRights]);
    fetchSpotReport(reefRights).then((report) => {
      setUserSpotReports([report]);
    });
  };

  const searchSpots = (searchTerm) => {
    fetchSearchQuery(searchTerm).then((resp) => {
      setSearchResults(resp[0].hits.hits);
    });
  };

  const addNewSpot = (id) => {
    let newSpotIds = [...spotIds];
    if (newSpotIds.indexOf(id) === -1) {
      newSpotIds.push(id);
    }
    setSpotIds(newSpotIds);
  };

  const removeSpot = (index) => {
    let id = spotIds[index];
    let newSpotIds = spotIds.filter((spotId) => {
      return spotId != id;
    });
    setSpotIds(newSpotIds);
  };

  return (
    <div>
      <Header setShowResults={setShowResults} setSearchTerm={setSearchTerm} />
      <Container fluid>
        {showResults && (
          <Results addNewSpot={addNewSpot} searchResults={searchResults} />
        )}
        <Spots userSpotReports={userSpotReports} removeSpot={removeSpot} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
