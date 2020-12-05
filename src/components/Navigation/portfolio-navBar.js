import React from 'react';
import classes from './portfolio-navBar.module.css';
import { NavLink } from "react-router-dom";

const Portfolio_navBar = () => {
    return (
        <nav className={classes.Nav}>
           <NavLink to={"/logout"}>Logout</NavLink> 
        </nav>
    );
};

export default Portfolio_navBar;