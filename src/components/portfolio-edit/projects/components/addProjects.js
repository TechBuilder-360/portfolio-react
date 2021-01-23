import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../../../container/Container";
import classes from "../../personal_info/personalInfo.module.css";
import PropTypes from "prop-types";
import TextArea from "../../../form/TextArea";
import { projectAction, deleteProject } from "../../../../store/actions/portfolioActions";

const AddProjects = ({ project, closeForm }) => {
  const content = {
    id: project.id || "",
    title: project.title || "",
    url: project.projectUrl || "",
    description: project.description || "",
  };

  const dispatch = useDispatch();
  const [value, setValue] = useState(content);
  const message = useSelector(state => state.portfolio.message)
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setLoading(false);
    }
  },[message]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const onChangeHandler = (name, txt) => {
    setValue({ ...value, [name]: txt });
  };

  const submitHandler = (e) => {
    e.preventDefault()
    setLoading(true)
    dispatch(projectAction(value));
    if(!value.id){
      closeForm();
    }
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
              value={value.url}
              required={true}
              placeholder="https://<your_url>"
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
        {value.id ? null: <Button style={{marginRight: "6px"}} variant="outline-danger" size="sm" onClick={closeForm}>Cancel</Button> }
          <Button
            type="submit"
            variant="outline-primary"
            className="mt-15"
            size="sm"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save"}
          </Button>
          {value.id ? <Button
              variant="outline-danger"
              className="mt-15 ml-1"
              size="sm"
              onClick={() => dispatch(deleteProject(project.id))}
            >
              Delete
            </Button> : null }
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
