import React from "react";
import Header from "./Header";
import PollutionDetails from "./PollutionDetails";

function HeadDetailsCombined(props) {
  return (
    <div>
      <Header mainObj={props.mainObj} />
      <PollutionDetails mainObj={props.mainObj} />
    </div>
  );
}

export default HeadDetailsCombined;
