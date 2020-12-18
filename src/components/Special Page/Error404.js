import React from "react";
import { Container as Con } from "react-bootstrap";
import { useSelector } from "react-redux";
import Container from "../../container/Container";
import Portfolio_navBar from "../Navigation/portfolio-navBar";
import HomeNavBar from "../Navigation/main-navigation";
import classes from './special.module.css'


const Error404 = () => {

  const auth = useSelector(state => state.auth.username)
  return (
    <Container>
      {auth ? <Portfolio_navBar/> : <HomeNavBar/>}
      <Con fluid className={classes.Body}>
          <p className={classes.Status}>404</p>
          <p className={classes.Text}>
              Page Not Found<br/>
              <span>The URL may be misplaced or the page you are looking is no longer available.</span>
          </p>
      </Con>
    </Container>
);
};

export default Error404;
