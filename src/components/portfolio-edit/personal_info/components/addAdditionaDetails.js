import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import classes from "../personalInfo.module.css";
import TextArea from "../../../form/TextArea";
import { connect } from "react-redux";
import InputDate from "../../../form/InputDate";

const AddPersonalDetails = (props) => {
  
  return (
    <div>
      <Row>
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Profession</Form.Label>
            <Form.Control placeholder="Web Designer" value={props.personalInfo.profession}/>
          </Form.Group>
        </Col>

        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Language Spoken</Form.Label>
            <Form.Control placeholder=" English,French" value={props.personalInfo.languages}/>
          </Form.Group>
        </Col>
      
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>State of Residence</Form.Label>
            <Form.Control placeholder="Location" value={props.personalInfo.state_of_residence}/>
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
            <Form.Control placeholder="Nigeria" value={props.personalInfo.nationality}/>
          </Form.Group>
        </Col>
      
        <Col xs={12} md={6} className={classes.Mb_5}>
          <InputDate label="Date of Birth"/>
        </Col>
      </Row>
      <Form.Group>
          <Form.Label>Professional Summary</Form.Label>
     <TextArea value={props.personalInfo.bio}/>
     </Form.Group>
    </div>
  );
};

// export default AddPersonalDetails;
const mapStateToProps = (state) => {
  return {
      personalInfo : state.personal_info,
  };
};

export default connect(mapStateToProps)(AddPersonalDetails);
