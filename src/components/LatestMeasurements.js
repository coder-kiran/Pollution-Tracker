import React from "react";
import classes from "./LatestMeasurements.module.css";
import Card from "../UI/Card";

function LatestMeasurements(props) {
  return (
    <Card className={classes["latest-measurements-parent"]}>
      <h2>Latest Measurements</h2>
      {props.mainObj.parameters.map((y) => (
        <div>
          <p>{y.id}</p>
          <p>{y.unit}</p>
          <p>{y.count}</p>
          <p>{y.average}</p>
          <p>{y.displayName}</p>
        </div>
      ))}
    </Card>
  );
}

export default LatestMeasurements;
