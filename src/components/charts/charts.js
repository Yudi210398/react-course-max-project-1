import React from "react";
import "./chart.css";
import ChartBar from "./chartBar";

const Chart = (props) => {
  const dataValue = props.dataPoints.map((data) => data.value);
  let totalMax = Math.max(...dataValue);
  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={totalMax}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
