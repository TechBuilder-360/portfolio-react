import React from "react";
import { connect } from "react-redux";
import Container from "../../../container/Container";
import classes from "./personal_info.module.css";
import avatar from "../../../images/avatar.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {findFlagUrlByCountryName} from 'country-flags-svg'

const PersonalInfo = (props) => {

  return (
    <Container>
      <div className={classes.Avatar_Wrapper}>
        <img
          className={classes.Avatar}
          src={
            props.personalInfo.profilePix
              ? props.personalInfo.profilePix
              : avatar
          }
          alt={props.personalInfo.username}
        />
      </div>
      <p>Welcome Back,</p>
      <p style={{ fontWeight: "bold" }}>
{props.personalInfo.lastName} {props.personalInfo.firstName}
      </p>

      <p>
      {props.personalInfo.profession}
      </p>

      <p>
        {" "}
        <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
        <img src={findFlagUrlByCountryName(props.personalInfo.location)} width='30' height="30" />  {props.personalInfo.location ? props.personalInfo.location : "Unknown"}
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
