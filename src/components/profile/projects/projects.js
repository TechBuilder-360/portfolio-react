import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import classes from "./projects.module.css";

const Projects = (props) => {
  return (
    <div className={props.wrapper}>
      <p className="title" style={{textAlign: "left"}}>Projects</p>
      <div className={classes.container}>
        {props.projects.map((project, index) => (
          <div key={index} className={classes.card}>
            <div className={classes.head} title={project.title}>{project.title}</div>
            <div className={classes.body}>
              {project.description}

              <Link to="#" className={classes.link}>
                {" "}
                More...
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.project,
  };
};

export default connect(mapStateToProps)(Projects);
