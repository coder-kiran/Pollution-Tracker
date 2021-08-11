import React from "react";

import Header from "./Header";
import PollutionDetails from "./PollutionDetails";
import LineChart from './LineChart'

function HeadDetailsCombined(props) {
  return (
    <div>
      <Header mainObj={props.mainObj} />
      <PollutionDetails mainObj={props.mainObj} />
      
      <LineChart mainObj={props.mainObj}/>
     
    </div>
  );
}

export default HeadDetailsCombined;
