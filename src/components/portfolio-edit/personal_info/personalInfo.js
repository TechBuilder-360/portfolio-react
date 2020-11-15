import React from "react";
import { Row } from "react-bootstrap";
import style from "../profile-edit.module.css";
import Images from "./components/profile_image";
import PersonalDetails from "./components/personalDetails";

const personalInfo = (props) => {
  return (
    <div className={style.SubSection}>
      <p className='title'> Personal Information </p>
      <hr />
      <PersonalDetails />
      <Images />
    </div>
  );
};

export default personalInfo;
