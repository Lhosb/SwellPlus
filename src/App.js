import React from "react";
import Spots from "./Spots";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SwellPlus</h1>
        <p>
          This is built to better predict the conditions specifically for the
          best wave in the world, Reef Rights. Other waves may be added in the
          future{" "}
        </p>
      </header>
      <Spots />
    </div>
  );
}

export default App;
