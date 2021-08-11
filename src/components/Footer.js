import React from 'react';
import classes from './Footer.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin,faGithub,faFacebook,faInstagram} from '@fortawesome/free-brands-svg-icons'



function Footer() {
    return (
        <footer className={classes.footerParent}>
            <p>copyright © 2021 Kiran K K. all rights reserved.</p>
            <div className={classes.socialmedia}>
                <a href="https://www.linkedin.com/in/kiran-k-k/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/coder-kiran" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.facebook.com/kiran.kaladharan.370/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.instagram.com/mr.__k_k/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faInstagram} /></a>
            </div>
           
            <div className={classes.socialmedia}></div>
        </footer>
    )
}

export default Footer
