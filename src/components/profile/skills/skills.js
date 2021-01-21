import React, {useState} from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Modal from "./modal";
import classes from './skills.module.css';


const Skills = (props) => {
   const [showModal, setShowModal] = useState(false);
   const [skill, setSkill] = useState();
   const [skillSubskills, setSkillSubskills] = useState();
  
  const openModal = (skill) => {
    
    let skillSubskills = props.subSkills.filter(subSkill => subSkill.skill === skill.id);
    setSkill(skill.title)
    setSkillSubskills(skillSubskills)
    setShowModal(true)
  };

  const closeModal = () => {
    setShowModal(false)
  };
  

  const modal = (
    <Modal
      show={showModal}
      handleClose={closeModal}
      skill={skill}
      subskills={skillSubskills}
    />
  );
  return (
    <div className={props.wrapper}>
      <p className="title" style={{textAlign: "left"}}>{props.title}</p>
      <div className={props.div}>
      <ul className={classes.Skill}>
        
        {props.skills.map( skill => (
          <li key={skill.id} title={skill.title} onClick={() => openModal(skill)} >
            <FontAwesomeIcon icon={faCircle} className={classes.circle} size='sm'/>  {skill.title} 
          </li>
        ))}
       
      </ul>
      </div>
      {showModal ? modal : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    skills: state.portfolio.skills,
    subSkills: state.portfolio.subskill,
  };
};

export default connect(mapStateToProps)(Skills);