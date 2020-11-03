import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Container from "../../../../container/Container";
import InputDate from "../../../form/InputDate";
import classes from "../../personal_info/personalInfo.module.css";

const SubEducation = () => {
  return (
    <Container>
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
              <Form.Control placeholder="Harvard University" />
            </Form.Group>
          </Col>
        
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Degree</Form.Label>
              <Form.Control placeholder="Bachelor of Science" />
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Course</Form.Label>
              <Form.Control placeholder="Computer Science" />
            </Form.Group>
          </Col>
        
          <Col xs={12} md={6} className={classes.Mb_5}>
            <InputDate label="Start Year"/>
          </Col>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <InputDate label="End Year"/>
          </Col>
        </Row>
      </Form>

      {/* I recommend we remove button later in future and save form field onBlur
          We may still rethink this later, just a suggestion :)
      */}
      <Button
        style={{ float: "right", marginTop: "15px" }}
        type="submit"
        className={classes.Mb_5}
      >
        Save
      </Button>
    </Container>
  );
};
export default SubEducation;
