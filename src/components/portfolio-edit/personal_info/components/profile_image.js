import React from "react";
import { Col, Image } from "react-bootstrap";
import avatar from "../../../../images/avatar.webp";
import classes from "../personalInfo.module.css";

const Images = () => {
  return (
    <Col xs={12} md={3} className={classes.Img}>
      <Image className={classes.Img} src={avatar} rounded />
    </Col>
  );
};

export default Images;
