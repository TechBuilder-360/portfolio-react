import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import classes from "./projects.module.css";


function text_truncate(str,len,ending){
  if(len == null){
    len=50
  }
if(ending == null){
ending= '...'
}
if(str.length > len){
  return str.substring(0,len-ending.length)+ending;
}else{
  return str 
}
}

const Projects = (props) => {
  return (
    <div className={props.wrapper}>
      <p className={classes.title}>Projects</p>
      <div className={classes.container}>
        {props.projects.map((project, index) => (
          <div key={index} className={classes.card}>
            <div className={classes.head}>{project.title}</div>
            <div className={classes.body}>
            <span>
              {text_truncate(project.description)}<br/>
              </span>
              <Link to="#" className={classes.link}>
                {" "}
                Read More
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
