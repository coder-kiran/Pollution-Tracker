import React from 'react'
import classes from './MeasurementBox.module.css'
function MeasurementBox(props) {
    return (
        <div className={classes['measurement-box']}>
           <p>{props.params.displayName}</p>
          <h1>{props.params.lastValue}</h1>          
          <p>{props.params.unit}</p>
          <p>{props.params.lastUpdated}</p>         
        </div>
    )
}

export default MeasurementBox
