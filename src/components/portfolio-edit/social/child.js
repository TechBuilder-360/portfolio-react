import React from "react";
import SocialForm from "./socialForm";
import { Accordion, Card, Button } from "react-bootstrap";
import classes from "../personal_info/personalInfo.module.css";
import {delete_social} from "../../../store/actions/portfolioActions";
import { useDispatch } from "react-redux";


const Child = ({ label, link, id, eventKey, ...props }) => {
  const dispatch = useDispatch()
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
            onClick={() => dispatch(delete_social(id))}
          >
            Delete
          </button>
        </span>
      </Card.Header>
      <Accordion.Collapse eventKey={props.index}>
        <Card.Body className={classes.Accordion_Body}>
          <SocialForm
            link={link}
            label={label}
            id={id}
          />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
export default Child;
