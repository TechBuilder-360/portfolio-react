import React from "react";
import { connect } from "react-redux";
import classes from "./education.module.css";

const Education = (props) => {
  let direction = classes.left;
  let educationTypeContent = null;

  const display = (education) => {
    switch (education.education_type) {
      case "Tertiary":
        educationTypeContent = (
          <div className={classes.content}>
            <h2>
              {education.end_year
                ? `${education.start_year} - ${education.end_year}`
                : "Till Date"}
            </h2>
            <p>Institution: {education.institution}</p>
            <p>Course of study: {education.course}</p>
            <p>Degree Obtained: {education.degree}</p>
            <p>Class of Degree: {education.class_of_degree}</p>
          </div>
        );
        break;

      case "College":
        educationTypeContent = (
          <div className={classes.content}>
            <h2>
              {education.end_year
                ? `${education.start_year} - ${education.end_year}`
                : `${education.start_year} - Till Date`}
            </h2>
            <p>Institution: {education.institution}</p>
            <p>Degree Obtained: {education.degree}</p>
          </div>
        );
        break;

      default:
        educationTypeContent = null;
    }

    return educationTypeContent;
  };

  const sortedEducationHistory = [...props.educationHistory].sort(
    (a, b) => b.start_year - a.start_year
  );

  return (
    <div className={`${props.wrapper}`}>
      <p className='title' style={{textAlign:'left'}}>{props.title}</p>
      <div className={classes.timeline}>
        {sortedEducationHistory.map((education, index) => (
          <div className={`${classes.container}  ${direction}`} key={index}>
            {display(education)}
            <p hidden>
              {direction === classes.left
                ? (direction = classes.right)
                : (direction = classes.left)}
            </p>
          </div>
        ))}
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
