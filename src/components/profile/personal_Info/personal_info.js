import React from "react";
import { connect } from "react-redux";
import Container from "../../../container/Container";
import classes from "./personal_info.module.css";
import avatar from '../../../images/avatar.webp'

const PersonalInfo = (props) => {
  return (
    <Container>
      <div className={classes.Avatar_Wrapper}>
        <img
          className={classes.Avatar}
          src={props.personalInfo.profile_pix?props.personalInfo.profile_pix: avatar}
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
