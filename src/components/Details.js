import React from 'react'
import classes from './Details.module.css'
import Card from '../UI/Card'
function Details(props) {
    return (
        <Card className={classes['details-parent']}> 
        <h2>Details</h2>
        <h1>{props.mainObj.measurements}</h1>
                   
        </Card>
    )
}

export default Details;
