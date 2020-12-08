import React from "react";
import { Accordion, Card, useAccordionToggle } from "react-bootstrap";
import { text_truncate } from "../../../../shared/utility";
import classes from "../../personal_info/personalInfo.module.css";
import AddProjects from "./addProjects";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, null); // Add checker to see if form has been edited and needs saving before closing

  return (
    <button
      id={`close-project-${eventKey}`}
      onClick={decoratedOnClick}
      type="button"
      className="btn btn-primary-outline text-primary shadow-none"
    >
      {" "}
      {children}
    </button>
  );
}

const Child = ({ project, ...props }) => {
  return (
    <Card className={classes.Accordion_Child}>
      <Card.Header>
        <span className={classes.Span} title={project.title}>{project.title}</span>
        <div style={{ float: "Right"}}>
          <CustomToggle eventKey={props.i}>Edit</CustomToggle> |
          <button
            type="button"
            className="btn btn-primary-outline text-primary shadow-none"
            onClick={() => props.delete(project.id)}
          >
            {" "}
            Delete
          </button>
        </div>
      </Card.Header>
      <Accordion.Collapse eventKey={props.i}>
        <Card.Body className={classes.Accordion_Body}>
          <AddProjects
            index={props.index}
            project={project}
            closeForm={() =>
              document.getElementById(`close-project-${props.i}`).click()
            }
          />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
export default Child;
