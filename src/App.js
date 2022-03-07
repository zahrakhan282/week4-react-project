import React from "react";
import Weather from "./Weather";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div>
      <div className="App Weather">
        <header className="App-header">
          <h1>Weather Wise</h1>
          <Weather />{" "}
        </header>
      </div>
      <small className="social-links">
        This project is{" "}
        <a
          href="https://github.com/Khanz1998/week4-react-project"
          target="_blank"
          rel="norefermer"
        >
          open sourced
        </a>
        , by{" "}
        <a
          href="https://www.linkedin.com/in/zahrakhan1998/"
          target="_blank"
          rel="norefermer"
        >
          Zahra Khan
        </a>
      </small>
    </div>
  );
}

export default App;
