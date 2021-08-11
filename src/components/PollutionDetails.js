import React from "react";

import Details from "./Details";
import LatestMeasurements from "./LatestMeasurements";
import Source from "./Source";

import classes from "./PollutionDetails.module.css";

function PollutionDetails(props) {
  return (
    <React.Fragment>
      <div className={classes["pollution-details-parent"]}>
        <Details mainObj={props.mainObj} />
        <LatestMeasurements mainObj={props.mainObj} />
        <Source mainObj={props.mainObj} />
      </div>
    </React.Fragment>
  );
}

export default PollutionDetails;
