import React from "react";
import classes from "./main-navigation.module.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import { useSelector, shallowEqual } from "react-redux";
import Container from "../../container/Container";
import Message from "../message";

const Portfolio_navBar = () => {
  const auth = useSelector((state) => state.auth, shallowEqual);
  return (
    <Container>
    <nav className={classes.Nav}>
      <Link to="/">
        <img src={logo} className={classes.Logo} alt="xPortfolio" />
      </Link>
      <div className={classes.Nav_item}>
        <NavLink to={`/${auth.username}`}> Dashboard </NavLink>
        {auth.token ? <NavLink to={"/edit"}> Edit Profile </NavLink> : null}
        {auth.token ? (
          <NavLink to={"/logout"}>Logout</NavLink>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </nav>
    <Message />
    </Container>
  );
};

export default Portfolio_navBar;
