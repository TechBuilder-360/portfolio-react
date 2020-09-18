import React from "react";
import classes from "./main-navigation.module.css";
import '../../../fonts/Poppins-Bold.ttf'
import { NavLink } from "react-router-dom";


const HomeNavBar = () => {
  return (
      <nav className={classes.Nav}>
          
        <div className={classes.Logo}>
            <span className={classes.Banner}>X</span>
            <span className={classes.Banner_Text}>Portfolio</span>
        </div>
        
        <div className={classes.Nav_item}>
            <NavLink to={''}>Home</NavLink>
            <NavLink to={''}>Features</NavLink>
            <NavLink to={''}>FAQs</NavLink>
            <NavLink to={''}>About us</NavLink>
            <NavLink to={''}>Contact us</NavLink>
        </div>
          
      </nav>
  );
};

export default HomeNavBar;