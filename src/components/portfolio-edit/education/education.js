import React, { useEffect, useState } from "react";
import style from "../profile-edit.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Accordion } from "react-bootstrap";
import Child from "./components/child";
import { useSelector } from "react-redux";
import classes from "../personal_info/personalInfo.module.css";
import EducationForm from "./components/educationForm";

const Education = (props) => {
  const limit = process.env.REACT_APP_EDUCATION_LIMIT;
  const [form, setForm] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const education = useSelector(state => state.portfolio.education)

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  useEffect(() => {
    if (formVisible) {
      setForm(
        <EducationForm education={{}} closeForm={() => handleCloseForm()} />
      );
    } else {
      setForm(null);
    }
  }, [formVisible]);

  // Populate accordion children with existing record
  const children = education.map((edu, i) => (
    <Child
      education={edu}
      closeForm={() => setFormVisible(false)}
      index={i + 1}
      key={i}
    />
  ));

  return (
    <div className={style.SubSection}>
      <p className="title">Education</p>
      <hr />
      <Accordion className={classes.Accordion_Parent}>{children}</Accordion>
      {form}
      {education.length < limit ? (
        <span style={{ marginTop: "2%" }} onClick={() => setFormVisible(true)}>
          <FontAwesomeIcon icon={faPlus} /> Add Education
        </span>
      ) : null}
    </div>
  );
};

export default Education;