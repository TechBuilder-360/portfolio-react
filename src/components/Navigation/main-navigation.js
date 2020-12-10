import React from "react";
import classes from "./main-navigation.module.css";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import Toast from "../toast/toast";
import { useSelector, shallowEqual,} from "react-redux";


const HomeNavBar = () => {
  const error = useSelector((state) => state.auth.error, shallowEqual);
  return (
    <div>
      {error ? <Toast headerText={error.name ? error.name : "Authentication Error"} 
      bodyText={"Authentication Error occured. Reload"}/> : null}
      <nav className={classes.Nav}>
        <img src={logo} className={classes.Logo} alt="xPortfolio"/>
        <div className={classes.Nav_item}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/features"}>Features</NavLink>
          <NavLink to={"/faqs"}>FAQs</NavLink>
          <NavLink to={"/about"}>About us</NavLink>
          <NavLink to={"/contact"}>Contact us</NavLink>
        </div>
      </nav>
    </div>
    
  );
};

export default HomeNavBar;
