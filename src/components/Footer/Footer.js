import React from "react";
import { Container, Navbar } from "react-bootstrap";
// import classes from "./Footer.module.css";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
      <Container fluid style={{backgroundColor: "#73838a"}}>
        <Navbar.Brand><img src={logo} alt="xPortfolio" /></Navbar.Brand>
      </Container>
  );
};

export default Footer;
