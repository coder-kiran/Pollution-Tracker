import React from 'react'
import classes from './LatestMeasurements.module.css'
import Card from '../UI/Card'

function LatestMeasurements() {
    return (
        <Card className={classes['latest-measurements-parent']}> 
           <h2>Latest Measurements</h2>
        </Card>
    )
}

export default LatestMeasurements;
