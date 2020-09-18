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
      </div>
    </nav>
  );
};

export default HomeNavBar;
