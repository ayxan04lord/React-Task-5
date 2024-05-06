// Dice.js

import React, { useState } from "react";
import PropTypes from "prop-types";
import './Dice.css'

const Dice = () => {
  const [result, setResult] = useState(null);
  const [diceColor, setDiceColor] = useState([240, 240, 240]);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setResult(randomNumber);
    setDiceColor([
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256)
    ]);
  };

  return (
    <div
      className="dice"
      style={{ backgroundColor: `rgb(${diceColor[0]}, ${diceColor[1]}, ${diceColor[2]})` }}
      onClick={rollDice}
    >
      {result}
    </div>
  );
};

Dice.propTypes = {
  result: PropTypes.number,
};

export default Dice;
