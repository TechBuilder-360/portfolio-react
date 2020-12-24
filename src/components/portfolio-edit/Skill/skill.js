import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import style from "../profile-edit.module.css";
import classes from "../personal_info/personalInfo.module.css";
import { connect } from "react-redux";
import Child from "./components/Child";
import { Accordion } from "react-bootstrap";
import SkillForm from './components/skillForm';


const Skill = (props) => {

  const limit = process.env.REACT_APP_SKILL_LIMIT
  const [form, setForm] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    if (formVisible) {
      setForm(
        <SkillForm
        skill={{}}
          closeForm={() => setFormVisible(false)}
        />
      );
    } else {
      setForm(null);
    }
  }, [formVisible]);

  const children = props.skill.map((sk, i) => (
    <Child
      skill={sk}
      closeForm={() => setFormVisible(false)}
      index={i+1}
      key={i}
    />
  ));

  return (
    <div className={style.SubSection}>
      <p className="title">Skills</p>
      <hr />
      <Accordion className={classes.Accordion_Parent}>{children}</Accordion>
      <br />
      {form}
      {props.skill.length < limit ? 
      <span onClick={() => setFormVisible(true)}>
      <FontAwesomeIcon icon={faPlusCircle} size="lg" /> add Skill
    </span>
      : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    skill: state.portfolio.skills,
  };
};

export default connect(mapStateToProps)(Skill);
