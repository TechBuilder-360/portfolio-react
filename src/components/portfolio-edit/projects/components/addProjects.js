import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Container from "../../../../container/Container";

import classes from "../../personal_info/personalInfo.module.css";
import PropTypes from "prop-types";
import TextArea from "../../../form/TextArea";
import { projectAction } from "../../../../store/actions/portfolioActions";

const AddProjects = ({ project, closeForm, ...props }) => {
  const content = {
    id: "" || project.id,
    title: "" || project.title,
    url: "" || project.url,
    description: "" || project.description,
  };

  const dispatch = useDispatch();
  const [value, setValue] = useState(content);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const onChangeHandler = (name, value) => {
    setValue({ ...value, [name]: value });
  };
  return (
    <Container>
      <Form>
        <Row>
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Project Title</Form.Label>
            <Form.Control
              name="title"
              onChange={handleChange}
              value={value.title}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Project URL</Form.Label>
            <Form.Control
              name="url"
              onChange={handleChange}
              value={value.url}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={12} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Project Descriptions</Form.Label>
            <TextArea
              name="description"
              value={value.description}
              changed={(name, value) => onChangeHandler(name, value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={12} style={{ textAlign: "right" }}>
          <Button
            type="button"
            onClick={closeForm}
            className="btn btn-info mt-15 mr-2"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              dispatch(projectAction(props.index, value));
              closeForm();
            }}
            type="button"
            className="btn btn-primary mt-15"
          >
            Save
          </Button>
        </Col>
        </Row>
      </Form>
    </Container>
  );
};

AddProjects.prototype = {
  project: PropTypes.object,
  closeForm: PropTypes.func.isRequired,
};
export default AddProjects;
