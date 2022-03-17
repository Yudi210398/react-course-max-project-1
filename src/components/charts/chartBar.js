import React from "react";
import "./chartBar.css";
const ChartBar = (props) => {
  let barFill = "0%";
  console.log(props.value, props.maxValue);
  if (props.maxValue > 0)
    barFill = Math.round((props.value / props.maxValue) * 100) + "%";

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFill, backgroundColor: "red" }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
