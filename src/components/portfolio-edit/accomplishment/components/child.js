import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import classes from "../../personal_info/personalInfo.module.css";
import { useDispatch } from "react-redux";
import { deleteAccomplishment } from "../../../../store/actions/portfolioActions";
import AccompForm from "./accompForm";

const Child = ({ accomplishment, ...props }) => {
  const dispatch = useDispatch();
  const label = `${accomplishment.course} at ${accomplishment.issuer}`
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
            onClick={() => dispatch(deleteAccomplishment(accomplishment.id))}
          >
            Delete
          </button>
        </span>
      </Card.Header>
      <Accordion.Collapse eventKey={props.index}>
        <Card.Body className={classes.Accordion_Body}>
          <AccompForm accomplishment={accomplishment} />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
export default Child;
