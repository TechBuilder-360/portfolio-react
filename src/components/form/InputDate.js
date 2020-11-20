import React, { useState } from "react";
import Container from "../../container/Container";
import classes from "./form.module.css";
import DatePicker from "react-date-picker";
import PropTypes from "prop-types";

const InputDate = (props) => {

    // const date = props.value || new Date().getFullYear()
    // const [value, onChange] = useState(new Date());
  
  return (
    <Container>
      <label className={classes.block}>{props.label}</label>
      <DatePicker
        onChange= { props.changeHandler }
        value={props.value}
        name={props.name}
        className={classes.datePicker}
        clearIcon={null}
        calendarClassName={classes.Calender}
        format="dd/MM/y"
      />
    </Container>
  );
};

InputDate.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
};

export default InputDate;
