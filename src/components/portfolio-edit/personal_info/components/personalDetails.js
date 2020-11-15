import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import classes from "../personalInfo.module.css";
import InputDate from "../../../form/InputDate";
import TextArea from "../../../form/TextArea";

const PersonalDetails = (props) => {
  return (
    <Form>
      <Row>
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="First name" value={props.firstName} />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="Last name" value={props.lastName} />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Middle Name</Form.Label>
            <Form.Control placeholder="Middle name" value={props.middleName} />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="@" value={props.email} />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="phone" placeholder="+234" value={props.phone} />
          </Form.Group>
        </Col>
        
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Profession</Form.Label>
            <Form.Control placeholder="Web Designer" value={props.personalInfo}/>
          </Form.Group>
        </Col>

        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Languages (Maximum of 3)</Form.Label>
            <Form.Control placeholder=" English, French" maxLength="100" value={props.personalInfo}/>
          </Form.Group>
        </Col>
      
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Location (State, Country)</Form.Label>
            <Form.Control placeholder="Kaduna, Nigeria" maxLength="50" value={props.personalInfo}/>
          </Form.Group>
        </Col>
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select" custom>
              <option value="">---</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </Form.Control>
          </Form.Group>
        </Col>
      
        <Col xs={12} md={3} className={classes.Mb_5}>
          <InputDate label="Date of Birth"/>
        </Col>

        <Col xs={12} md={12} className={classes.Mb_5}>
        <Form.Group>
          <Form.Label>Professional Summary</Form.Label>
          <TextArea value=""/>
        </Form.Group>
        </Col>
     
        <Col xs={12} md={12} className={classes.Mb_5}>
        <Button
          type="submit"
          variant="outline-dark"
        >
          Save
        </Button>
        </Col>
      </Row>
    </Form>
  );
};
export default PersonalDetails;
