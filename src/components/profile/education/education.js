import React from "react";
import { connect } from "react-redux";
import classes from "./education.module.css";

const Education = (props) => {
  let direction = classes.left;

  /* This logic also needs to be re-evaluated */
  const sortedEducationHistory = [...props.educationHistory].sort(
    (a, b) => b.startYear - a.startYear 
  );

  return (
    <div className={`${props.wrapper}`}>
      <p className="title" style={{ textAlign: "left" }}>
        {props.title}
      </p>
      <div className={props.timeline}>
        <div className={classes.timeline}>
          {sortedEducationHistory.map((education, index) => (
            <div className={`${classes.container}  ${direction}`} key={index}>
              <div className={classes.content}>
                <h5>
                  {education.endYear
                    ? `${education.startYear} - ${education.endYear}`
                    : "Till Date"}
                    {/* Calculating Till Date logic has to change because End year cannot be empty */}
                </h5>
                <p>Institution: {education.institution}</p>
                <p>Course of study: {education.course}</p>
                <p>Degree Obtained: {education.degree}</p>

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
    educationHistory: state.portfolio.education,
  };
};

export default connect(mapStateToProps)(Education);
