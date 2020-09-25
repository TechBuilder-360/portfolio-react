import React from "react";
import { connect } from "react-redux";
import Container from "../../../container/Container";
import classes from "./personal_info.module.css";

const PersonalInfo = (props) => {
  return (
    <Container>
      <div className={classes.Avatar_Wrapper}>
        <img
          className={classes.Avatar}
          src={props.personalInfo.profile_pix}
          alt={props.personalInfo.username}
        />
      </div>
      <p>
        {props.personalInfo.last_name} {props.personalInfo.first_name}
      </p>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    personalInfo: state.personal_info,
  };
};

export default connect(mapStateToProps)(PersonalInfo);
