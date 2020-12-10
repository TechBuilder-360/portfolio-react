import React from 'react';
import classes from './portfolio-navBar.module.css';
import { NavLink } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";

const Portfolio_navBar = () => {
    const token = useSelector((state) => state.auth.token, shallowEqual);
    return (
        <nav className={classes.Nav}>
            { token ? <NavLink to={"/logout"}>Logout</NavLink> : <NavLink to={"/login"}>Login</NavLink>} 
        </nav>
    );
};

export default Portfolio_navBar;