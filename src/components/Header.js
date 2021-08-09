import React from 'react'
import classes from './Header.module.css'
function Header() {
    return (
        <React.Fragment>
            <div className={classes['header-parent']}>
            <h1>LuckNow</h1>
            <h2>Gandhinagar,lucknow,uppcb,IN</h2>
            </div>
        </React.Fragment>
    )
}

export default Header
