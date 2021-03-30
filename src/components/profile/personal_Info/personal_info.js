import React from "react";
import { connect } from "react-redux";
import Container from "../../../container/Container";
import classes from "./personal_info.module.css";
import flag from "../../../images/flag.png";
import { findFlagUrlByCountryName } from "country-flags-svg";
import { Avatar } from 'antd';




const PersonalInfo = (props) => {
  let str = props.personalInfo.location;
  let country = str ? str.substring(str.indexOf(" ") + 1) : "Nigeria";

  return (
    <Container>
      <div className={classes.Avatar_Wrapper}>
        {
         props.personalInfo.profilePix ? 
         <Avatar size={150} 
         src={props.personalInfo.profilePix}
       /> : <Avatar size={200} ><p style={{fontSize: 20}}>{(props.personalInfo.firstName.charAt(0) + props.personalInfo.lastName.charAt(0)).toUpperCase()}</p></Avatar>
        }
       
      </div>
      <p style={{ fontSize: 15, fontWeight: "bold", textTransform: "capitalize" }}>
        {props.personalInfo.lastName},{props.personalInfo.middleName? ` ${props.personalInfo.middleName}`: null } {props.personalInfo.firstName }
      </p>

      <p>{props.personalInfo.profession}</p>

      { props.personalInfo.location ? 
        <p>
          <img alt="" src={findFlagUrlByCountryName(country) || flag} width="20" height="20"/>{" "}
          {props.personalInfo.location}
        </p> : 
        null
      }
      
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    personalInfo: state.portfolio.personalInfo,
  };
};

export default connect(mapStateToProps)(PersonalInfo);
