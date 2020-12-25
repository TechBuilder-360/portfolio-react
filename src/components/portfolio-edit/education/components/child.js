import React from "react";
import EducationForm from "./educationForm";
import { Accordion, Card, Button } from "react-bootstrap";
import classes from "../../personal_info/personalInfo.module.css";
import { useDispatch } from "react-redux";
import { delete_education } from "../../../../store/actions/portfolioActions";

const Child = ({ education, ...props }) => {
  const dispatch = useDispatch();
  const label = `Studied ${education.course} at ${education.institution} from ${education.startYear} to ${education.endYear}`
  return (
    <Card className={classes.Accordion_Child}>
      <Card.Header>
        <div className={classes.Label} title={label}>
          {label}
        </div>
        <span className={classes.Span}>
          <Accordion.Toggle as={Button} variant="link" style={{color: "#9BA4B7"}} eventKey={props.index}>
            Edit
          </Accordion.Toggle>
          <button
            type="button"
            className="btn btn-primary-outline text-danger shadow-none"
            onClick={() => dispatch(delete_education(education.id))}
          >
            Delete
          </button>
        </span>
      </Card.Header>
      <Accordion.Collapse eventKey={props.index}>
        <Card.Body className={classes.Accordion_Body}>
          <EducationForm education={education} />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
export default Child;
