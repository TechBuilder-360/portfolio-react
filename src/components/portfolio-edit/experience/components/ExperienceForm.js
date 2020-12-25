import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import MonthYear from "../../../form/monthYearPicker/month_year_picker";
import TextArea from "../../../form/TextArea";
import classes from "../../personal_info/personalInfo.module.css";
import { experienceAction } from "../../../../store/actions/portfolioActions";

const ExperienceForm = ({ experience, closeForm }) => {
  
  const content = {
    id: experience.id || "",
    organization: experience.organization || "",
    description: experience.description || "",
    position: experience.position || "",
    startYear: experience.startYear || "",
    endYear: experience.endYear || "",
  };

  const dispatch = useDispatch();
  const [value, setValue] = useState(content);


  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onChangeHandler = (name, txt) => {
    setValue({ ...value, [name]: txt });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault()

    dispatch(experienceAction(value));
    closeForm();
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
              name="startYear"
              changeHandler={(name, value) => onChangeHandler(name, value)}
              value={value.startYear}
              label="Start Year"
            />
          </Col>
          <Col xs={6} md={3} className={classes.Mb_5}>
            <MonthYear
              name="endYear"
              changeHandler={(name, value) => onChangeHandler(name, value)}
              value={value.endYear}
              label="End Year"
            />
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
            <Button type="submit" className="btn btn-primary mt-15"> Save </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
export default ExperienceForm;
