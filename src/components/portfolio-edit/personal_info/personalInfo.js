import React from "react";
import style from "../profile-edit.module.css";
import PortfolioImage from "./components/profile_image";
import PersonalDetails from "./components/personalDetails";
import { connect } from "react-redux";


const personalInfo = (props) => {

  return (
    <div className={style.SubSection}>
      <p className='title'> Personal Information </p>
      <hr />
      <PersonalDetails information={props.detail}/>
      <PortfolioImage avartar={props.detail.profilePix}/>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    detail: state.portfolio.personalInfo
  }
}

export default connect(mapStateToProps)(personalInfo);
