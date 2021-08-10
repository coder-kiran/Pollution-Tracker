import React from "react";
import Card from "../UI/Card";
import MeasurementBox from "./MeasurementBox";
import classes from './LatestMeasurements.module.css'
function LatestMeasurements(props) {
  return (
    <Card >
       <h2>Latest Measurements</h2>
      <div className={classes['latest-measurement-parent']}>     
      {props.mainObj.parameters.map((params) => (
       
<MeasurementBox params={params} key={params.id} />

       
        
      
      ))}

      </div>
    </Card>
  );
}

export default LatestMeasurements;
