import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import classes from "../personalInfo.module.css";

import { connect } from "react-redux";
import InputDate from "../../../form/InputDate";

const AddPersonalDetails = (props) => {
  
  return (
    <div>
      
    </div>
  );
};

// export default AddPersonalDetails;
const mapStateToProps = (state) => {
  return {
      personalInfo : state.personal_info,
  };
};

export default connect(mapStateToProps)(AddPersonalDetails);
