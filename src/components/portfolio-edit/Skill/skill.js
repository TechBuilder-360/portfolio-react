import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import style from "../profile-edit.module.css";
import classes from "../personal_info/personalInfo.module.css";
import { connect, useDispatch } from "react-redux";
import Child from "./components/Child";
import { Accordion } from "react-bootstrap";
import SkillForms from "./components/SkillForms";


const Skill = (props) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  useEffect(() => {
    if (formVisible) {
      setForm(
        // Use a different form to get the inputted skill and sub-skill
        // <SkillForms
        //   index={null}
        //   skill={{}}
        //   closeForm={() => handleCloseForm()}
        // />
      );
    } else {
      setForm(null);
    }
  }, [formVisible]);

  const children = props.skill.map((sk, i) => (
    <Child
      skill={sk}
      closeForm={() => setFormVisible(false)}
      i={i + 1}
      index={i}
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
      <span onClick={() => setFormVisible(true)}>
        <FontAwesomeIcon icon={faPlus} size="lg" /> add Skill
      </span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    skill: state.portfolio.skills,
  };
};

export default connect(mapStateToProps)(Skill);
