import React from "react";
import { Container, Navbar } from "react-bootstrap";
import classes from "./Footer.module.css";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
      <Container fluid className={classes.Footer}>
        <Navbar.Brand><img src={logo} alt="Oris" style={{height: "70px"}}/></Navbar.Brand>
      </Container>
  );
};

export default Footer;
