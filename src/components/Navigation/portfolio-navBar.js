import React from 'react';
import classes from './portfolio-navBar.module.css';
import { Link, NavLink } from "react-router-dom"
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFontAwesomeLogoFull, faLandmark, faPowerOff } from '@fortawesome/free-solid-svg-icons';

const Portfolio_navBar = () => {
    return (
        <nav className={classes.Nav}>

<Link to='/'>
<img src={logo} className={classes.Logo} alt="xPortfolio"/>

</Link>


        </nav>
    );
};

export default Portfolio_navBar;