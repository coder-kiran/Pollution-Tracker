import React from "react";
import { Line } from "react-chartjs-2";
import classes from "./LineChart.module.css";

const LineChart = (props) => {

  const values = props.mainObj.parameters.map((param) => {
    const chartObj = {
      lValue: param.lastValue,
      dName: param.displayName,
      dateFrom: param.firstUpdated,
      dateTo: param.lastUpdated,
    };
    return chartObj;
  });
  
  const data = {
    labels: values && values.map((val) => val.dName),
    datasets: [
      {
        label: "in µg/m³",
        data: values.map((val) => val.lValue),
        fill: false,
        backgroundColor: "orange",
        borderColor: "orange",
      },
    ],
  }

  return (
    <div className={classes["chart-parent"]}>
      <Line data={data} height={100} width={500} />
    </div>
  )

}

export default LineChart;
