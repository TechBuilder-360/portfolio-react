import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import style from "../profile-edit.module.css";
import { useSelector } from "react-redux";
import SkillForm from './components/skillForm';
import { Collapse } from 'antd';
import SubSkills from "./components/subSkill";
import SubSkillForm from "./components/subskillForms";

const Skill = () => {

  const limit = process.env.REACT_APP_SKILL_LIMIT
  const subskillLimit = process.env.REACT_APP_SUBSKILL_LIMIT
  const [form, setForm] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const skills = useSelector((state) => state.portfolio.skills);
  const subSkills = useSelector((state) => state.portfolio.subskill);
  
  const { Panel } = Collapse;

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

  // Populate accordion children with existing record
  const panels = skills.map((sk, i) => (
    <Panel
      header={sk.title}
      showArrow={false}
      key={i}
    >
      <SkillForm skill={sk}/>
      <hr/>
      <SubSkills skillId={sk.id} />
      <hr/>
      {/* {subSkills.length < limit ? <SubSkillForm skillId={sk.id} /> : null} */}
      <SubSkillForm skillId={sk.id} />
    </Panel>
  ));

  return (
    <div className={style.SubSection}>
      <p className="title">Skills</p>
      <hr />
      <Collapse accordion >
        {panels}
      </Collapse>
      <hr/>
      {form}
      {skills.length < limit ? 
      <span onClick={() => setFormVisible(true)}>
      <FontAwesomeIcon icon={faPlus} /> Add Skills
    </span>
      : null}
    </div>
  );
};


export default Skill;
