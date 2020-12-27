import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Container from "../../../../container/Container";
import classes from "../../personal_info/personalInfo.module.css";
import PropTypes from "prop-types";
import TextArea from "../../../form/TextArea";
import { projectAction } from "../../../../store/actions/portfolioActions";

const AddProjects = ({ project, closeForm }) => {
  const content = {
    id: project.id || "",
    title: project.title || "",
    url: project.projectUrl || "",
    description: project.description || "",
  };

  const dispatch = useDispatch();
  const [value, setValue] = useState(content);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const onChangeHandler = (name, txt) => {
    setValue({ ...value, [name]: txt });
  };

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(projectAction(value));
    closeForm();
  }

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Row>
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Project Title</Form.Label>
            <Form.Control
              name="title"
              onChange={handleChange}
              value={value.title}
              required={true}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Project URL</Form.Label>
            <Form.Control
              type="url"
              name="url"
              onChange={handleChange}
              value={value.projectUrl}
              required={true}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={12} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Project Descriptions</Form.Label>
            <TextArea
              name="description"
              value={value.description}
              required={true}
              changed={(name, value) => onChangeHandler(name, value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={12} style={{ textAlign: "right" }}>
        {value.id ? null: <Button style={{marginRight: "6px"}} onClick={closeForm}>Cancel</Button> }
          <Button
            type="submit"
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
