import React, { useEffect, useState } from "react";
import style from "../profile-edit.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Collapse } from "antd";
import EducationForm from "./educationForm";

const Education = (props) => {
  const limit = process.env.REACT_APP_EDUCATION_LIMIT;
  const [form, setForm] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const education = useSelector((state) => state.portfolio.education);
  const { Panel } = Collapse;

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
  const panels = education.map((edu, i) => {
    const label = `Studied ${edu.course} at ${edu.institution} from ${edu.startYear} to ${edu.endYear}`;
    return (
      <Panel header={label} showArrow={false} key={i}>
        <EducationForm education={edu} />
      </Panel>
    );
  });

  return (
    <div className={style.SubSection}>
      <p className="title">Education</p>
      <hr />
      <Collapse accordion>{panels}</Collapse>
      <hr />
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
