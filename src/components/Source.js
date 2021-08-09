import React from "react";
import classes from "./Source.module.css";
import Card from "../UI/Card";

function Source(props) {
  return (
    <Card className={classes["source-parent"]}>
      <h2>Source</h2>
      {props.mainObj.sources.map((x) => (
        <div className={classes.kiran} key={x.id}>
          <h2>
            <a href={x.url} target="_blank">
              {x.name}
            </a>
          </h2>
        </div>
      ))}
    </Card>
  );
}

export default Source;
