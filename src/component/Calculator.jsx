import React from "react";
import "./calcu.css";
const Calculator = () => {
  const value = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "=", "c"];

  return (
    <center className="main-container">
      <div className="heading">
        <h1>React test: </h1>
        <h2>Calculator App</h2>
      </div>
      <div className="container">
        {value.map((_value, _index) => (
          <button>{_value}</button>
        ))}
      </div>
    </center>
  );
};

export default Calculator;
