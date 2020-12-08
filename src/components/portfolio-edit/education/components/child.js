import React from "react";
import EducationForm from "./educationForm";
import { Accordion, Card, useAccordionToggle } from "react-bootstrap";
import classes from "../../personal_info/personalInfo.module.css";
import { text_truncate } from "../../../../shared/utility";
import { useDispatch } from "react-redux";
import { delete_education } from "../../../../store/actions/portfolioActions";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, null); // Add checker to see if form has been edited and needs saving before closing

  return (
    <button
      id={`close-education-${eventKey}`}
      onClick={decoratedOnClick}
      type="button"
      className="btn btn-primary-outline text-primary shadow-none"
    >
      {" "}
      {children}
    </button>
  );
}

const Child = ({ education, ...props }) => {

  const dispatch = useDispatch()
  return (
    <Card className={classes.Accordion_Child}>
      <Card.Header>
        <span className={classes.Span} title={education.institution}>
          {education.institution}
        </span>
        <div style={{ float: "Right" }}>
          <CustomToggle eventKey={props.i}>Edit</CustomToggle> |
          <button
            type="button"
            className="btn btn-primary-outline text-primary shadow-none"
            onClick={() => dispatch(delete_education(education.id))}
          >
            Delete
          </button>
        </div>
      </Card.Header>
      <Accordion.Collapse eventKey={props.i}>
        <Card.Body className={classes.Accordion_Body}>
          <EducationForm
            index={props.index}
            education={education}
            closeForm={() =>
              document.getElementById(`close-education-${props.i}`).click()
            }
          />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
export default Child;
