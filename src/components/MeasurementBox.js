import React from 'react'
import classes from './MeasurementBox.module.css'
function MeasurementBox(props) {
    return (
        <div className={classes['measurement-box']}>
           <p>{props.params.displayName}</p>
          <h1>{Math.round(props.params.lastValue)}</h1>          
          <p>{props.params.unit}</p>
          <h6>{props.params.lastUpdated}</h6>         
        </div>
    )
}

export default MeasurementBox
