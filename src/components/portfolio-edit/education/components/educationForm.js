import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Container from "../../../../container/Container";
import MonthPicker from "../../../form/monthYearPicker/month_year_picker";
import classes from "../../personal_info/personalInfo.module.css";
import { add_education } from "../../../../store/actions/portfolioActions";
import PropTypes from "prop-types";

const EducationForm = ({ education, closeForm }) => {
  const dispatch = useDispatch();

  const content = {
    institution: "",
    start_year: "",
    end_year: "",
    degree: "",
    course: "",
  };

  const [value, setValue] = useState(education || content);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const val = {
      ...value,
    };
    dispatch(add_education(value));
    closeForm();
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onChangeHandler = (name, date) => {
    setValue({...value, [name]: date})
  }

  return (
    <Container>
      <Form>
        <Row>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>School Attended</Form.Label>
              <Form.Control
                name="institution"
                onChange={handleChange}
                value={value.institution}
                placeholder="Harvard University"
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
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6} className={classes.Mb_5}>
            <MonthPicker
              name="start_year"
              changeHandler={(name, value)=>onChangeHandler(name, value)}
              value={value.start_year}
              label="Start Year"
            />
          </Col>
          <Col xs={6} md={6} className={classes.Mb_5}>
            <MonthPicker
              name="end_year"
              changeHandler={(name, value)=>onChangeHandler(name, value)}
              value={value.end_year}
              label="End Year"
            />
          </Col>
        </Row>
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Course</Form.Label>
            <Form.Control
              name="course"
              onChange={handleChange}
              value={value.course}
              placeholder="Computer Science"
            />
          </Form.Group>
        </Col>

        <div style={{ textAlign: "right" }}>
          <Button
            type="button"
            onClick={closeForm}
            className="btn btn-info mt-15 mr-2"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            type="button"
            className="btn btn-primary mt-15"
          >
            Save
          </Button>
        </div>
      </Form>
    </Container>
  );
};

EducationForm.prototype = {
  education: PropTypes.object,
  closeForm: PropTypes.func.isRequired,
};

export default EducationForm;
