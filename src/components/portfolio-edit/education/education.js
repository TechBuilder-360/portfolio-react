import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import classes from "../personal_info/personalInfo.module.css";
import style from "../profile-edit.module.css";

const Education = () => {
  return (
    <div className={style.SubSection}>
      <p className='title'>Education</p>
      <hr />

      <Form>
        <Row>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Education Type</Form.Label>
              <Form.Control placeholder="Tertiary" />
            </Form.Group>
          </Col>

          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>School Attended</Form.Label>
              <Form.Control placeholder="Harvard University"/>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Degree</Form.Label>
              <Form.Control placeholder="Bachelor of Science" />
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Course</Form.Label>
              <Form.Control placeholder="Computer Science"/>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Start Year</Form.Label>
              <Form.Control type="date"/>
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>End Year</Form.Label>
              <Form.Control type="date"/>
            </Form.Group>
          </Col>
        </Row>
      </Form>

      <Button
        style={{ float: "right" }}
        type="submit"
        className={classes.Mb_5}
      >
        Save
      </Button>
    </div>
  );
};
export default Education;
