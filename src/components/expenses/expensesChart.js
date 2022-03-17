import React from "react";
import Chart from "../charts/charts";
const ChartExpenses = (props) => {
  const dataChart = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = +expense.date.split("-")[1]; //
    dataChart[expenseMonth - 1].value += expense.harga;
  }

  return <Chart dataPoints={dataChart} />;
};

export default ChartExpenses;
