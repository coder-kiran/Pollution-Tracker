import React, { useEffect, useState } from "react";

import HeadDetailsCombined from './components/HeadDetailsCombined';
import axios from "axios";
import contextObject from "./store/pollution-list";

function App() {
  const [pollutionList, setPollutionList] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/locations?limit=100&page=1&offset=0&sort=desc&radius=1000&country_id=IN&city=Lucknow&order_by=lastUpdated&dumpRaw=false"
      )
      .then((response) => setPollutionList(response.data.results));
  }, []);

  
    
   const filteredObject = pollutionList &&  pollutionList.map((list) => ({
        city: list.city,
        cityAddress: list.name,
        country: list.country,
        measurements:list.measurements,

        sources: list.sources.map((sourceObj) => ({
          id: sourceObj.id,
          url: sourceObj.url,
          name: sourceObj.name,
        })),

        parameters: list.parameters.map((parameter) => ({
          id: parameter.id,
          unit: parameter.unit,
          count: parameter.count,
          average: parameter.average,
          displayName: parameter.displayName,
          lastUpdated: parameter.lastUpdated,
          firstUpdated: parameter.firstUpdated,
          parameterId: parameter.parameterId,
        })),
      }))
  return (
      <React.Fragment>
        {
          console.log(filteredObject)
        }
        
        {
          filteredObject && filteredObject.map((mainObj)=>  <HeadDetailsCombined mainObj={mainObj}/> )
        }
       
      </React.Fragment>
                     
  );
}

export default App;
