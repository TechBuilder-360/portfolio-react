import React from "react";
import { connect } from "react-redux";
import { sortMonthYear, text_truncate } from "../../../shared/utility";
import { Tooltip } from 'antd';
import classes from "../education/education.module.css";

const Experience = (props) => {
  
  let direction = classes.left;
  const sortedExperience = sortMonthYear(props.experience)
  return (
    <div className={props.wrapper}>
      <p className="title" style={{ textAlign: "left" }}>
        {props.title}
      </p>
      <div className={props.timeline}>
        <div className={classes.timeline}>
          {sortedExperience.map((experience, index) => (
            <div className={`${classes.container}  ${direction}`} key={index}>
              <div className={classes.content}>
                <p>
                  <span style={{float: "right"}}>
                  {experience.inProgress
                    ? `${experience.startYear} - Till Date`
                    : `${experience.startYear} - ${experience.endYear}`
                  }
                </span>
                <strong>{experience.organization}</strong>
                </p>
                <p> {experience.position}<br/>
                <Tooltip style={{color: "red"}} placement="topLeft" title={experience.description} arrowPointAtCenter>
                  {text_truncate(experience.description, 40)}
                </Tooltip>
                </p>
                <p hidden>
                  {direction === classes.left
                    ? (direction = classes.right)
                    : (direction = classes.left)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    experience: state.portfolio.experience,
  };
};

export default connect(mapStateToProps)(Experience);
