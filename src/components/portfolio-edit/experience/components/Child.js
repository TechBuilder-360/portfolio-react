import React from "react";
import { Accordion, Card, useAccordionToggle } from "react-bootstrap";
import classes from "../../personal_info/personalInfo.module.css";
import { useDispatch } from "react-redux";
import ExperienceForm from "./ExperienceForm";
import { delete_experience } from "../../../../store/actions/portfolioActions"

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, null);

  return (
    <button
      id={`close-experience-${eventKey}`}
      onClick={decoratedOnClick}
      type="button"
      className="btn btn-primary-outline text-primary shadow-none"
    >
      {" "}
      {children}
    </button>
  );
}

const Child = ({ experience, ...props }) => {
  const dispatch = useDispatch();
  return (
    <Card className={classes.Accordion_Child}>
      <Card.Header>
        <span className={classes.Span} title={experience.organization}>{experience.organization}</span>
        <div className={classes.Card_Action}>
          <CustomToggle eventKey={props.index}>Edit</CustomToggle> |
          <button
            type="button"
            className="btn btn-primary-outline text-primary shadow-none"
            onClick={() => dispatch(delete_experience(experience.id))}
          >
            Delete
          </button>
        </div>
      </Card.Header>
      <Accordion.Collapse eventKey={props.index}>
        <Card.Body className={classes.Accordion_Body}>
          <ExperienceForm
            experience={experience}
            closeForm={() =>
              document.getElementById(`close-experience-${props.index}`).click()
            }
          />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
export default Child;