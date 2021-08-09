import React from 'react'
import classes from './Details.module.css'
import Card from '../UI/Card'
function Details(props) {
    return (
        <Card className={classes['details-parent']}> 
        <h2>Details</h2>
        <h1 >{props.mainObj.measurements}</h1>
       <h3>Measurements</h3> 
            <h3>Coordinates</h3>
            <h1>N{props.mainObj.coordinates.latitude}</h1>     
             <h1>E{props.mainObj.coordinates.longitude}</h1>   
             <h3>Project Collection Dates</h3>
             <p>will be added soon</p>
        </Card>
    )
}

export default Details;
