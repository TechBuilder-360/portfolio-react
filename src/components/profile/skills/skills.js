import React from "react";
import { connect } from "react-redux";
import classes from './skills.module.css'

const Skills = (props) => {
  
  return (
    <div className={props.wrapper}>
      <p className="title" style={{textAlign: "left"}}>{props.title}</p>
      <ul className={classes.Skill}>
        {props.skills.map((skills, index) => (
          <li key={index} title={skills} >
            {skills}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    skills: state.portfolio.skills,
  };
};

export default connect(mapStateToProps)(Skills);