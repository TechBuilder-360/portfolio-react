import React from "react";
import { connect } from "react-redux";
import Container from "../../../container/Container";
import classes from "./personal_info.module.css"
import avatar from '../../../images/avatar.webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

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
      <p style={{fontSize:"20pt"}}>Welcome Back,</p>
      <p style={{fontSize:"25pt",fontWeight:'bold'}}>
        {props.personalInfo.last_name} {props.personalInfo.first_name}
      </p>
     
     < p>  <FontAwesomeIcon icon={faCircle} color="green" /> Nigeria</p>

      
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    personalInfo: state.portfolio.personalInfo,
  };
};

export default connect(mapStateToProps)(PersonalInfo);
