import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../../container/Container";
import classes from "../personal_info/personalInfo.module.css";
import { delete_education, educationAction } from "../../../store/actions/portfolioActions";
import PropTypes from "prop-types";
import MonthYear from "../../form/month-year";

const EducationForm = ({ education, closeForm }) => {
  const content = {
    id: education.id || "",
    institution: education.institution || "",
    startYear: education.startYear || "",
    endYear: education.endYear || "",
    degree: education.degree || "",
    course: education.course || "",
    inProgress: education.inProgress || false,
  };
  const dispatch = useDispatch();
  const message = useSelector((state) => state.portfolio.message);
  const [value, setValue] = useState(content);
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

  const onChangeHandler = (name, date) => {
    setValue({ ...value, [name]: date });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setLoading(true);
    dispatch(educationAction(value));
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
              <Form.Label>School Attended</Form.Label>
              <Form.Control
                name="institution"
                onChange={handleChange}
                value={value.institution}
                placeholder="Harvard University"
                required={true}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Degree</Form.Label>
              <Form.Control
                name="degree"
                onChange={handleChange}
                value={value.degree}
                placeholder="Bachelor of Science"
                required={true}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={3} className={classes.Mb_5}>
            <MonthYear
              label="Start Year"
              name="startYear"
              value={value.startYear}
              changed={onChangeHandler}
            />
          </Col>
          <Col xs={12} md={3} className={classes.Mb_5}>
            <MonthYear
              label="End Year"
              name="endYear"
              value={value.endYear}
              changed={onChangeHandler}
            />
            <Form.Group>
              <Form.Check
                type="checkbox"
                label={<span className={classes.check}>In Progress</span>}
                checked={value.inProgress}
                onChange={handleCheckChange}
                name="inProgress"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Course</Form.Label>
              <Form.Control
                name="course"
                onChange={handleChange}
                value={value.course}
                placeholder="Computer Science"
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
                onClick={() => dispatch(delete_education(education.id))}
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

EducationForm.prototype = {
  education: PropTypes.object,
  closeForm: PropTypes.func.isRequired,
};

export default EducationForm;
