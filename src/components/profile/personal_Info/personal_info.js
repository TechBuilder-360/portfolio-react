import React from "react";
import { connect } from "react-redux";
import Container from "../../../container/Container";
import classes from "./personal_info.module.css";
import avatar from "../../../images/avatar.webp";
import flag from "../../../images/flag.png";
import { findFlagUrlByCountryName } from "country-flags-svg";


const PersonalInfo = (props) => {
  let str = props.personalInfo.location;
  let country = str.substring(str.indexOf(" ") + 1) || "Nigeria";

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
      { props.isOwner ? <p>Welcome Back,</p> : null }
      <p style={{ fontWeight: "bold" }}>
        {props.personalInfo.lastName} {props.personalInfo.firstName }
      </p>

      <p>{props.personalInfo.profession}</p>

      <p>
        <img alt="" src={findFlagUrlByCountryName(country) || flag} width="20" height="20"/>{" "}
        {props.personalInfo.location ? props.personalInfo.location : "Nigeria"}
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
