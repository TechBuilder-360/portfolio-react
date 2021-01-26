import React from "react";
import classes from "./main-navigation.module.css";
import logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import Container from "../../container/Container";


const HomeNavBar = () => {
  return (
    <Container>
      <nav className={classes.Nav}>
       <Link to='/'>
         <img src={logo} className={classes.Logo} alt="xPortfolio"/></Link>
        <div className={classes.Nav_item}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/features"}>Features</NavLink>
          <NavLink to={"/faqs"}>FAQs</NavLink>
          <NavLink to={"/about"}>About us</NavLink>
          <NavLink to={"/contact"}>Contact us</NavLink>
        </div>
      </nav>
    </Container>
  );
};

export default HomeNavBar;
