import React from 'react'
import classes from './Details.module.css'
import Card from '../UI/Card'
function Details() {
    return (
        <Card className={classes['details-parent']}> 
        <h2>Details</h2>           
        </Card>
    )
}

export default Details;
