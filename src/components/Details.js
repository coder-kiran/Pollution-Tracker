import React from "react";
import classes from "./Details.module.css";
import Card from "../UI/Card";
function Details(props) {
  return (
    <Card >
        <h2>Details</h2>
        <div className={classes['details-parent']}>

        <div className={classes.measurements}>
        <h1>{props.mainObj.measurements}</h1>
      <h5>Measurements</h5>
        </div>
        <div className={classes.coordinates}>
        <h6>Coordinates</h6>
      <h5>N{props.mainObj.coordinates.latitude},E{props.mainObj.coordinates.longitude}</h5>
        </div>
      
      
        </div>
     
    </Card>
  );
}

export default Details;
