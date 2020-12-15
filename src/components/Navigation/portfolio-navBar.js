import React from "react";
import classes from "./portfolio-navBar.module.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import { useSelector, shallowEqual } from "react-redux";

const Portfolio_navBar = () => {
    const auth = useSelector((state) => state.auth, shallowEqual);
    return (
        <nav className={classes.Nav}>

<Link to='/'>
<img src={logo} className={classes.Logo} alt="xPortfolio"/>

</Link>


            <NavLink to={`/${auth.username}`}> Dashboard </NavLink> | {" "}
            { auth.token ? <NavLink to={"/edit"}> Edit Profile </NavLink> : null} | {" "}
            { auth.token ? <NavLink to={"/logout"}>Logout</NavLink> : <NavLink to={"/login"}>Login</NavLink>}
        </nav>
    );
};

export default Portfolio_navBar;
