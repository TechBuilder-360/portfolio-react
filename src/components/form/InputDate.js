import React from "react";
import Container from "../../container/Container";
import classes from "./form.module.css";

const InputDate = (props) => {
  return (
    <Container>
      <label className={classes.block}>{props.label}</label>
      <div></div>
    </Container>
  );
};

export default InputDate;
