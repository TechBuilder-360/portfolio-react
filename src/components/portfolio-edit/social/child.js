import React from "react";
import SocialForm from "./socialForm";
import { Accordion, Card, useAccordionToggle } from "react-bootstrap";
// import classes from "../../personal_info/personalInfo.module.css";
import classes from "../personal_info/personalInfo.module.css";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, null); // Add checker to see if form has been edited and needs saving before closing

  return (
    <a id={`close-accordion-${eventKey}`} onClick={decoratedOnClick}>
      {" "}
      {children}
    </a>
  );
}

const Child = ({ label, link, ...props }) => {
  return (
    <Card className={classes.Accordion_Child}>
      <Card.Header>
        {label}
        &nbsp;{"-"}&nbsp;
        {link}
        <span style={{ float: "Right" }}>
          <CustomToggle eventKey={props.i}>Edit</CustomToggle> |{" "}
          <a type="button" onClick={() => props.removeMore(label, link)}>
            Delete
          </a>
        </span>
      </Card.Header>
      <Accordion.Collapse eventKey={props.i}>
        <Card.Body>
          <SocialForm
            link={link}
            label={label}
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
