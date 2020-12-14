import React from "react";
import { Accordion, Card, useAccordionToggle } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../../../store/actions/portfolioActions";
import classes from "../../personal_info/personalInfo.module.css";
import AddProjects from "./addProjects";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, null);

  return (
    <button
      id={`close-project-${eventKey}`}
      onClick={decoratedOnClick}
      type="button"
      className="btn btn-primary-outline text-primary shadow-none"
    >
      {children}
    </button>
  );
}

const Child = ({ project, index }) => {
  const dispatch = useDispatch()
  return (
    <Card className={classes.Accordion_Child}>
      <Card.Header>
        <span className={classes.Span} title={project.title}>
          {project.title}
        </span>
        <div style={{ float: "Right" }}>
          <CustomToggle eventKey={index}>Edit</CustomToggle> |
          <button
            type="button"
            className="btn btn-primary-outline text-primary shadow-none"
            onClick={() => dispatch(deleteProject(project.id))}
          >
            Delete
          </button>
        </div>
      </Card.Header>
      <Accordion.Collapse eventKey={index}>
        <Card.Body className={classes.Accordion_Body}>
          <AddProjects
            project={project}
            closeForm={() =>
              document.getElementById(`close-project-${index}`).click()
            }
          />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
export default Child;
