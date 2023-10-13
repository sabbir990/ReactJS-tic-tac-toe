import React, { useEffect } from "react";
import '../index.css';

function Box({ values, index, handleIndex, count, getTurn }) {
  const colorX = {
    color: "#d92c29"
  }
  const color0 = {
    color: "#0f73d1"
  }
  useEffect(() => {
    // You can use the 'count' prop here if needed
  }, [count]);

  const passIndex = () => {
    handleIndex(index);
    getTurn();
  }

  return (
    <div className="box" onClick={passIndex}>
      <span style={values === "X" ? colorX : color0}>{values}</span>
    </div>
  );
}

export default Box;