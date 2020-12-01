import React from "react";
import { Accordion, Card, useAccordionToggle } from "react-bootstrap";
import classes from "../../personal_info/personalInfo.module.css";
import ExperienceForm from "./ExperienceForm";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, null); // Add checker to see if form has been edited and needs saving before closing

  return (
    <button
      id={`close-accordion-${eventKey}`}
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
  return (
    <Card className={classes.Accordion_Child}>
      <Card.Header>
        <span>{experience.organization}</span>
        <div style={{ float: "Right" }}>
          <CustomToggle eventKey={props.i}>Edit</CustomToggle> |
          <button
            type="button"
            className="btn btn-primary-outline text-primary shadow-none"
            onClick={() => props.delete(experience.id)}
          >
            {" "}
            Delete
          </button>
        </div>
      </Card.Header>
      <Accordion.Collapse eventKey={props.i}>
        <Card.Body>
          <ExperienceForm
            index={props.index}
            experience={experience}
            closeForm={() =>
              document.getElementById(`close-accordion-${props.i}`).click()
            }
          />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
export default Child;
