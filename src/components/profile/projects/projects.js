import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./projects.module.css";

function text_truncate(str) {
    let [maxLength, ending] = [50, "..."];
    if (str.length > maxLength) {
    return str.substring(0, maxLength).concat(ending);
    }
    return str;
}

const Projects = (props) => {
  return (
    <div className={props.wrapper}>
      <p className='title' style={{textAlign: "left"}}>{props.title}</p>
      <div className={classes.container}>
        {props.projects.map((project, index) => (
          <div key={index} className={classes.card}>
            <div className={classes.head}>{project.title}</div>
            <div className={classes.body}>
              <div>
                {text_truncate(project.description)}
              </div>
              <Link to="#" className={classes.link}>
                Details
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
