import React from "react";
import Container from "../../../container/Container";
import classes from "../form.module.css";
import Main from "./Main";
import PropsTypes from 'prop-types'

const monthYearPicker = (props) => {
  return (
    <Container>
      <label className={classes.block}>{props.label}</label>
      <div>
        <Main {...props}/>
      </div>
    </Container>
  );
};

monthYearPicker.prototype = {
  changeHandler: PropsTypes.func.isRequired,
  name: PropsTypes.string.isRequired,
  value: PropsTypes.string.isRequired,
  label: PropsTypes.string.isRequired
}

export default monthYearPicker;
