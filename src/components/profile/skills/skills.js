import React from "react";
import { connect } from "react-redux";
// import ProjectModal from "../projects/project-modal";
import classes from './skills.module.css'


// const handleClose = () => {
  // this.setState({
  //   show: false,
  //   project: null,
  // });
// };

const Skills = (props) => {

  // const modal = (
  //   <ProjectModal
      // show={this.state.show}
      // handleClose={this.handleClose}
      // project={this.state.project}
  //   />
  // );
  return (
    <div className={props.wrapper}>
      <p className="title" style={{textAlign: "left"}}>{props.title}</p>
      <ul className={classes.Skill}>
        {props.skills.map((skill, index) => (
          <li key={skill.id} title={skill.title} onClick={this} >
            {skill.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    skills: state.skills,
  };
};

export default connect(mapStateToProps)(Skills);