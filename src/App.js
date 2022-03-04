import React from "react";
import Weather from "./Weather";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App Weather">
      <header className="App-header">
        <h1>Weather Wise</h1>
        <Weather />
      </header>
    </div>
  );
}

export default App;
