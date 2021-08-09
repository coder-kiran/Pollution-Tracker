import React from 'react'
import Details from './Details';
import LatestMeasurements from './LatestMeasurements';
import Source from './Source';

import classes from './PollutionDetails.module.css'
function PollutionDetails() {
    return (
        <React.Fragment>
            <div className={classes['pollution-details-parent']}>
            <Details/>
            <LatestMeasurements/>
            <Source/>
            </div>
        </React.Fragment>
    )
}

export default PollutionDetails;