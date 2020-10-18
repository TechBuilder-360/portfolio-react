import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import classes from "../personalInfo.module.css";

const AddPersonalDetails = () => {
  return (
    <div>
      <Row>
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Profession</Form.Label>
            <Form.Control placeholder="Web Designer"/>
          </Form.Group>
        </Col>

        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Language Spoken</Form.Label>
            <Form.Control placeholder=" English,French"/>
          </Form.Group>
        </Col>
      
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>State of Residence</Form.Label>
            <Form.Control/>
          </Form.Group>
        </Col>
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control/>
          </Form.Group>
        </Col>
     
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Place Of Birth</Form.Label>
            <Form.Control/>
          </Form.Group>
        </Col>
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Nationality</Form.Label>
            <Form.Control placeholder="Nigeria "/>
          </Form.Group>
        </Col>
      
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control type="date"/>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group>
          <Form.Label>Professional Summary</Form.Label>
          <Form.Control  as="textarea" rows="6" cols='3' />
          </Form.Group>
    </div>
  );
};

export default AddPersonalDetails;
