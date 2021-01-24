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
                <p>
                  <span style={{float: "right"}}>
                  {education.inProgress
                    ? `${education.startYear} - Till Date`
                    : `${education.startYear} - ${education.endYear}`
                  }
                </span>
                <strong>{education.institution}</strong>
                </p>
                <p>{education.course} <br/>
                   {education.degree}
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
    education: state.portfolio.education,
  };
};

export default connect(mapStateToProps)(Education);
