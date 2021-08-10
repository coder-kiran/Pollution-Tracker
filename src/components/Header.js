import React from "react";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <React.Fragment>
      {props.mainObj && (
        <div className={classes["header-parent"]}>
          <h1>{props.mainObj.city}</h1>
          <h2>{props.mainObj.cityAddress}, {props.mainObj.country}</h2>
        </div>
      )}
    </React.Fragment>
  );
}

export default Header;
