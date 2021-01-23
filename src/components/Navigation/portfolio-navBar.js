import React from "react";
import classes from "./main-navigation.module.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import { useSelector, shallowEqual } from "react-redux";
import Container from "../../container/Container";

const Portfolio_navBar = () => {
  const auth = useSelector((state) => state.auth, shallowEqual);

  return (
    <Container fluid>
      <nav className={classes.Nav}>
        <Link to="/">
          <img src={logo} className={classes.Logo} alt="xPortfolio" />
        </Link>
        <div className={classes.Nav_item}>
          {auth.token ? (
            <Container>
              <NavLink to={`/${auth.username}`}> Dashboard </NavLink>
              <NavLink to={"/edit"}> Edit Profile </NavLink>
              <NavLink to={"/configuration"}> Configuration </NavLink>
              <NavLink to={"/logout"}>Logout</NavLink>
            </Container>
          ) : (
            <Container>
              <NavLink to={"/signup"}>Sign Up</NavLink>
              <NavLink to={"/login"}>Login</NavLink>
            </Container>
          )}
        </div>
      </nav>
    </Container>
  );
};

export default Portfolio_navBar;
