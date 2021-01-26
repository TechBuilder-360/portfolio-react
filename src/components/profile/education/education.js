import React from "react";
import { connect } from "react-redux";
import { sortMonthYear } from "../../../shared/utility";
import classes from "./education.module.css";

const Education = (props) => {
  
  let direction = classes.left;
  const sortedEducation = sortMonthYear(props.education)
  
  return (
    <div className={`${props.wrapper}`}>
      <p className="title" style={{ textAlign: "left" }}>
        {props.title}
      </p>
      <div className={props.timeline}>
        <div className={classes.timeline}>
          {sortedEducation.map((education, index) => (
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
    education: state.portfolio.education,
  };
};

export default connect(mapStateToProps)(Education);
