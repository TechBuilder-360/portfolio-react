import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../../../store/actions/portfolioActions";
import classes from "../../personal_info/personalInfo.module.css";
import AddProjects from "./addProjects";

const Child = ({ project, index }) => {
  const dispatch = useDispatch();
  return (
    <Card className={classes.Accordion_Child}>
      <Card.Header>
        <div className={classes.Label} title={project.title}>
          {project.title}
        </div>
        <span className={classes.Span}>
          <Accordion.Toggle as={Button} variant="link" style={{color: "#9BA4B7"}} eventKey={index}>
            Edit
          </Accordion.Toggle>
          <button
            type="button"
            className="btn btn-primary-outline text-danger shadow-none"
            onClick={() => dispatch(deleteProject(project.id))}
          >
            Delete
          </button>
        </span>
      </Card.Header>
      <Accordion.Collapse eventKey={index}>
        <Card.Body className={classes.Accordion_Body}>
          <AddProjects project={project} />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
export default Child;
