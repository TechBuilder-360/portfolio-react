import React from "react";
import { Row } from "react-bootstrap";
import style from "../profile-edit.module.css";
import Images from "./components/image";
import PersonalDetails from "./components/personalDetails";

const personalInfo = () => {
  return (
    <div className={style.SubSection}>
        <Row>
          <Images />
          <PersonalDetails />
        </Row>
    </div>
  );
};

export default personalInfo;
