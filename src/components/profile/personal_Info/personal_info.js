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
          src={props.personalInfo.profilePix ? props.personalInfo.profilePix: avatar}
          alt={props.personalInfo.username}
        />
      </div>
      <p>
        {props.personalInfo.lastName} {props.personalInfo.firstName}
      </p>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    personalInfo: state.portfolio.personalInfo,
  };
};

export default connect(mapStateToProps)(PersonalInfo);
