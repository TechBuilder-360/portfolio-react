import React from "react";
import { connect } from "react-redux";
import classes from "../education/education.module.css";

const Experience = (props) => {
  let direction = classes.left;

  const sortedExperienceHistory = [...props.experienceHistory].sort(
    (a, b) => b.start_year - a.start_year
  );

  return (
    <div className={props.wrapper}>
      <p className='title' style={{textAlign: "left"}}>{props.title}</p>
      <div className={classes.timeline}>
        {sortedExperienceHistory.map((experience, index) => (
          <div className={`${classes.container}  ${direction}`} key={index}>
            <div className={classes.content}>
              <h2>
                {experience.end_year
                  ? `${experience.start_year} - ${experience.end_year}`
                  : `${experience.start_year} - Till Date`}
              </h2>
              <p>Organization: {experience.organization}</p>
              <p>Position: {experience.position}</p>
              <p>Role:{experience.description}</p>
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
  );
};

const mapStateToProps = (state) => {
  return {
    experienceHistory: state.experience,
  };
};

export default connect(mapStateToProps)(Experience);
