import React from "react";
import classes from "./main-navigation.module.css";
import "../../fonts/Poppins-Bold.ttf";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";



const HomeNavBar = () => {
  return (
    <nav className={classes.Nav}>
      <img src={logo} className={classes.Logo} />
      <div className={classes.Nav_item}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/features"}>Features</NavLink>
        <NavLink to={"/faqs"}>FAQs</NavLink>
        <NavLink to={"/about"}>About us</NavLink>
        <NavLink to={"/contact"}>Contact us</NavLink>
        
        
        <div className="dropdown mt-2">
          <p className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Signin/Signup
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <NavLink className="dropdown-item" to={"/login"}>Signin</NavLink>
            <NavLink className="dropdown-item" to={"/signup"}>Signup</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavBar;
