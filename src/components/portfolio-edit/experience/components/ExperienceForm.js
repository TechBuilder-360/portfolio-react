import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import MonthYear from "../../../form/monthYearPicker/month_year_picker";
import TextArea from "../../../form/TextArea";
import classes from "../../personal_info/personalInfo.module.css";
import { experienceAction } from "../../../../store/actions/portfolioActions";

const ExperienceForm = ({ experience, closeForm,...props }) => {
    const content = {
    id:""|| experience.id,
    organization: "" ||experience.organization ,
    description: ""||experience.description,
    position: ""||experience.position,
    start_year:""||experience.start_year,
    end_year: ""||experience.end_year,
  };

  const dispatch = useDispatch();
  const [value, setValue] = useState(content);

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
              name='organization'
                onChange={handleChange}
                placeholder="Monetary Assurance"
                value={value.organization}
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
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <MonthYear
            name="start_year"
              changeHandler={(name, value) => onChangeHandler(name, value)}
              value ={value.start_year}
              label="Start Year"
            />
          </Col>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <MonthYear
            name="end_year"
              changeHandler={(name, value) => onChangeHandler(name, value)}
              value = {value.end_year}
              label="End Year"
            />
          </Col>
          <Col xs={12} md={12} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Experience Summary</Form.Label>
              <TextArea value={value.description} changed={(name, value) => onChangeHandler(name, value)} />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Button
        onClick={()=>{
          dispatch(experienceAction(props.index, value));
          closeForm();
        }
        }
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
