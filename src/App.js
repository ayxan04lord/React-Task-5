// App.js

import React from "react";
import "./App.css";
import Dice from "./Dice";

function App() {
  return (
    <div className="App">
      <h1>Dice Roller</h1>
      <div className="dice-container">
        <Dice />
        <Dice />
        <Dice />
      </div>
    </div>
  );
}

export default App;
