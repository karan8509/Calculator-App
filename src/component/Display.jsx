import React from "react";

const Display = ({ element, handleClicked }) => {
  return <button onClick={() => handleClicked(element)}>{element}</button>;
};

export default Display;
