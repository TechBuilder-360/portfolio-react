import React from "react";
import { Container, Navbar } from "react-bootstrap";
// import classes from "./Footer.module.css";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <Navbar sticky="bottom" expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand><img src={logo} /></Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Footer;
