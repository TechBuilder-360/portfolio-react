import React from "react";
import { Row } from "react-bootstrap";
import style from "../profile-edit.module.css";
import Images from "./components/image";
import PersonalDetails from "./components/personalDetails";

const personalInfo = (props) => {
  return (
    <div className={style.SubSection}>
      <Row>
        <Images />
        <PersonalDetails
          firstName={props.data.first_name}
          lastName={props.data.last_name}
          middleName={props.data.middle_name}
          email={props.data.email}
          languages={props.data.languages}
          gender={props.data.gender}
          stateOfResidence={props.data.state_of_residence}
          profession={props.data.profession}
          dateOfBirth={props.data.date_of_birth}
          professionalSummary={props.data.bio}
          phone={props.data.phone}
        />
      </Row>
    </div>
  );
};

export default personalInfo;
