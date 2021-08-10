import React from "react";
import { Line } from "react-chartjs-2";
import classes from "./LineChart.module.css";



const LineChart = (props) => {

const values=props.mainObj.parameters.map((x)=>{
  const chartObj={
    lValue:x.lastValue,
      dName:x.displayName
  }
  return chartObj;
   
  
})
  
console.log('hi values',values.map(pp=>pp.lValue));
  const data = {
    labels:values.map(pp=>pp.dName) ,
    datasets: [
      {
        label: "in µg/m³",
        data: values.map(pp=>pp.lValue),
        fill: false,
        backgroundColor: "orange",
        borderColor: "orange",
      },
    ],
  };
  return (
    <div className={classes["chart-parent"]}>
      <Line data={data} height={100} width={500} />
    </div>
  );
};

export default LineChart;
