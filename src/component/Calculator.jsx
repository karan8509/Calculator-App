import React, { useState } from "react";
import "./calcu.css";
import Display from "./Display";
const Calculator = () => {
  const [input, setInput] = useState("");
  // const value = ;

  const handleClicked = (buttonClicked) => {
    if (buttonClicked === "c") {
      setInput("");
    } else if (buttonClicked === "=") {
      let currentResultCreate = eval(input);
      setInput(currentResultCreate);
    } else if (buttonClicked) {
      let value = buttonClicked + input;
      setInput(value);
    } else if (buttonClicked) {
      let value = buttonClicked - input;
      setInput(value);
    } else if (buttonClicked) {
      let value = buttonClicked * input;
      setInput(value);
    } else if (buttonClicked) {
      let value = buttonClicked / input;
      setInput(value);
    } else if (buttonClicked) {
      let value = buttonClicked + input;
      setInput(value);
    } else {
      setInput((prev) => prev + buttonClicked);
    }
  };
  return (
    <center className="main-container">
      <div className="heading">
        <h1>React test: </h1>
        <h2>Calculator App</h2>
      </div>

      <input type="text" value={input} readOnly />
      <div className="container">
        {[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "=",
          "c",
          "+",
          "-",
          "*",
          "/",
        ].map((_element) => (
          <Display
            element={_element}
            handleClicked={handleClicked}
            key={_element}
          />
        ))}
      </div>
    </center>
  );
};

export default Calculator;
