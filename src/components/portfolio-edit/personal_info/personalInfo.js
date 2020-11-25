import React from "react";
import style from "../profile-edit.module.css";
import Images from "./components/profile_image";
import PersonalDetails from "./components/personalDetails";
import { connect } from "react-redux";


const personalInfo = (props) => {

  return (
    <div className={style.SubSection}>
      <p className='title'> Personal Information </p>
      <hr />
      <PersonalDetails information={props.detail}/>
      <Images avartar={props.detail.profile_pix}/>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    detail: state.portfolio.personal_info
  }
}

export default connect(mapStateToProps)(personalInfo);
