import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import MonthYear from "../../form/monthYearPicker/month_year_picker";
import TextArea from "../../form/TextArea";
import classes from "../personal_info/personalInfo.module.css";

const ExperienceForm = ({ experience, closeForm }) => {
  const dispatch = useDispatch();

  const content = {
    organization: "",
    description: "",
    position: "",
    start_year: null,
    end_year: null,
  };

  const [value, setValue] = useState(experience || content);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const val = {
      ...value,
    };
    // dispatch(add_education(value));
    closeForm();
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onChangeHandler = (name, date) => {
    setValue({ ...value, [name]: date });
  };

  return (
    <Container>
      <Form>
        <Row>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Organization</Form.Label>
              <Form.Control
                onChange={handleChange}
                placeholder="Monetary Assurance"
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Position</Form.Label>
              <Form.Control
                onChange={handleChange}
                placeholder="Head of Sales"
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={6} className={classes.Mb_5}>
            <MonthYear
              changeHandler={(name, value) => onChangeHandler(name, value)}
              label="Start Year"
            />
          </Col>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <MonthYear
              changeHandler={(name, value) => onChangeHandler(name, value)}
              label="End Year"
            />
          </Col>
          <Col xs={12} md={12} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Experience Summary</Form.Label>
              <TextArea value="" changeHandler={(name, value) => onChangeHandler(name, value)} />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Button
        onClick={handleSubmit}
        style={{ float: "right" }}
        type="submit"
        className={classes.Mb_5}
      >
        Save
      </Button>
    </Container>
  );
};
export default ExperienceForm;
