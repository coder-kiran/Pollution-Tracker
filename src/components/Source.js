import React from "react";
import classes from "./Source.module.css";
import Card from "../UI/Card";

function Source(props) {
  return (
    <Card >
      <h2>Source</h2>
      {props.mainObj.sources.map((x) => (
        <div className={classes['source-parent']} key={x.id}>
          <h3>
            <a href={x.url} target="_blank" rel="noreferrer">
              {x.name}
            </a>
          </h3>
        </div>
      ))}
    </Card>
  );
}

export default Source;
