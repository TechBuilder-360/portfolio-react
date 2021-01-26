import React from "react";
import { connect } from "react-redux";
import { sortMonthYear } from "../../../shared/utility";
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
                <h5>
                  {experience.endYear
                    ? `${experience.startYear} - ${experience.endYear}`
                    : `${experience.startYear} - Till Date`} 
                    {/* Calculating Till Date logic has to change because End year cannot be empty */}
                </h5>
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    experience: state.portfolio.experience,
  };
};

export default connect(mapStateToProps)(Experience);
