import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import TextArea from "../../form/TextArea";
import classes from "../personal_info/personalInfo.module.css";
import MonthYear from "../../form/month-year";
import {
  experienceAction,
  delete_experience,
} from "../../../store/actions/portfolioActions";

const ExperienceForm = ({ experience, closeForm }) => {
  const content = {
    id: experience.id || "",
    organization: experience.organization || "",
    description: experience.description || "",
    position: experience.position || "",
    startYear: experience.startYear || "",
    endYear: experience.endYear || "",
    inProgress: experience.inProgress || false,
  };

  const dispatch = useDispatch();
  const [value, setValue] = useState(content);
  const message = useSelector((state) => state.portfolio.message);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setLoading(false);
    }
  }, [message]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleCheckChange = (e) => {
    setValue({ ...value, [e.target.name]: !value.inProgress });
  };

  const onChangeHandler = (name, txt) => {
    setValue({ ...value, [name]: txt });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setLoading(true);
    dispatch(experienceAction(value));
    if (!value.id) {
      closeForm();
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Organization</Form.Label>
              <Form.Control
                name="organization"
                onChange={handleChange}
                placeholder="Monetary Assurance"
                value={value.organization}
                required={true}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Position</Form.Label>
              <Form.Control
                name="position"
                onChange={handleChange}
                placeholder="Head of Sales"
                value={value.position}
                required={true}
              />
            </Form.Group>
          </Col>
          <Col xs={6} md={3} className={classes.Mb_5}>
            <MonthYear
              label="Start Year"
              name="startYear"
              value={value.startYear}
              changed={onChangeHandler}
            />
          </Col>
          <Col xs={6} md={3} className={classes.Mb_5}>
            <MonthYear
              label="End Year"
              name="endYear"
              value={value.endYear}
              changed={onChangeHandler}
            />
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="In Progress"
                checked={value.inProgress}
                onChange={handleCheckChange}
                name="inProgress"
              />
            </Form.Group>
          </Col>
          <Col xs={6} md={6} className={classes.Mb_5}>
            
          </Col>
          <Col xs={12} md={12} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Experience Summary</Form.Label>
              <TextArea
                value={value.description}
                name="description"
                changed={(name, value) => onChangeHandler(name, value)}
                required={true}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={12} style={{ textAlign: "right" }}>
            {value.id ? null : (
              <Button
                style={{ marginRight: "6px" }}
                variant="outline-danger"
                size="sm"
                onClick={closeForm}
              >
                Cancel
              </Button>
            )}
            <Button
              type="submit"
              variant="outline-primary"
              className="mt-15"
              size="sm"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save"}
            </Button>
            {value.id ? (
              <Button
                variant="outline-danger"
                className="mt-15 ml-1"
                size="sm"
                onClick={() => dispatch(delete_experience(experience.id))}
              >
                Delete
              </Button>
            ) : null}
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
export default ExperienceForm;
