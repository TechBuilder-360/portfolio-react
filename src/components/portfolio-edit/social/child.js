import React from "react";
import SocialForm from "./socialForm";
import { Accordion, Card, useAccordionToggle } from "react-bootstrap";
import classes from "../personal_info/personalInfo.module.css";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, null); // Add checker to see if form has been edited and needs saving before closing

  return (
    <button
      id={`close-social-${eventKey}`}
      onClick={decoratedOnClick}
      type="button"
      className="btn btn-primary-outline text-primary shadow-none"
    >
      {children} 
    </button>
  );
}

const Child = ({ label, link, id, eventKey, ...props }) => {
  return (
    <Card className={classes.Accordion_Child}>
      <Card.Header>
        <span title={label}>
          {label}
        </span>
        <span style={{ float: "Right" }}>
          <CustomToggle eventKey={props.i}>Edit</CustomToggle> |
          <button type="button" className="btn btn-primary-outline text-primary shadow-none" onClick={() => props.removeMore(id)}>{" "} Delete </button>
        </span>
      </Card.Header>
      <Accordion.Collapse eventKey={props.i}>
        <Card.Body className={classes.Accordion_Body}>
          <SocialForm
            link={link}
            label={label}
            id={id}
            closeForm={() =>
              document.getElementById(`close-social-${props.i}`).click()
            }
          />
          {label}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
export default Child;
