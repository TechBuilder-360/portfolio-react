import React, { useEffect, useState } from "react";
import style from "../profile-edit.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Accordion } from "react-bootstrap";
import Child from "./components/Child";
import { connect } from "react-redux";
import classes from "../personal_info/personalInfo.module.css";
import ExperienceForm from "./components/ExperienceForm";

const Experience = (props) => {

  const limit = process.env.REACT_APP_EXPERIENCE_LIMIT;
  const [form, setForm] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  useEffect(() => {
    if (formVisible) {
      setForm(
        <ExperienceForm
          experience={props.experience}
          closeForm={() => handleCloseForm()}
        />
      );
    } else {
      setForm(null);
    }
  }, [formVisible]);

  // Populate accordion children with existing record
  const children = props.experience.map((exp, i) => (
    <Child
      experience={exp}
      closeForm={() => setFormVisible(false)}
      index={i+1}
      key={i}
    />
  ));

  return (
    <div className={style.SubSection}>
      <p className="title">Experience</p>
      <hr />
      <Accordion className={classes.Accordion_Parent}>{children}</Accordion>
      {form}
      {props.experience.length < limit ? (
        <span onClick={() => setFormVisible(true)}>
        <FontAwesomeIcon icon={faPlusCircle} size="lg" /> add more Experience
      </span>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    experience: state.portfolio.experience,
  };
};

export default connect(mapStateToProps)(Experience);
