import React from 'react'
import classes from './Source.module.css'
import Card from '../UI/Card'

function Source(props) {
    return (
        <Card className={classes['source-parent']}> 
         <h2>Source</h2>
        {
            props.mainObj.sources.map(x=><div>
                <h2>{x.url}</h2>
                <h3>{x.id}</h3>
                <h4>{x.name}</h4>
            </div>)
        }
          
           
        </Card>
    )
}

export default Source
