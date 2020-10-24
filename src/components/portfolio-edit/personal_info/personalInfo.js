import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import style from "../profile-edit.module.css";
import classes from "./personalInfo.module.css";
import avatar from "../../../images/avatar.webp";

const personalInfo = (props) => {
  return (
    <div className={style.SubSection}>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <Image className={classes.Img} src={avatar} roundedCircle />
          </Col>

          <Col xs={12} md={9} className={classes.Mt_10}>
            <Form>
              <Row>
                <Col xs={12} md={4} className={classes.Mb_5}>
                  <Form.Control title="First name" placeholder="First name" value={props.firstName} />
                </Col>
                <Col xs={12} md={4} className={classes.Mb_5}>
                  <Form.Control placeholder="Last name" title="Last name" value={props.lastName}/>
                </Col>
                <Col xs={12} md={4} className={classes.Mb_5}>
                  <Form.Control placeholder="Middle name" title="Middle name" value={props.middleName}/>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={4} className={classes.Mb_5}>
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    title="Email Address"
                    value={props.email}
                  />
                </Col>
                <Col xs={12} md={4} className={classes.Mb_5}>
                  <Form.Control title="Gender" as="select" custom value={props.gender}>
                    <option value="">Select a gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Unknown">Unknown</option>
                  </Form.Control>
                </Col>
                <Col xs={12} md={4} className={classes.Mb_5}>
                  <Form.Control
                    placeholder="Languages i.e English, Yoruba"
                    title="Languages"
                    value={props.languages}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={4} className={classes.Mb_5}>
                  <Form.Control title="State of Residence" placeholder="State, Country" value={props.stateOfResidence}/>
                </Col>
                <Col xs={12} md={4} className={classes.Mb_5}>
                  <Form.Control type="date" placeholder="Date of birth" title="Date of birth" value={props.dateOfBirth}/>
                </Col>
                <Col xs={12} md={4} className={classes.Mb_5}>
                  <Form.Control title="Profession" placeholder="Profession" value={props.profession}/>
                </Col>
              </Row>
              <Row>
                <Col className={classes.Mb_5}>
                  <Form.Control as="textarea" rows="3" placeholder="Professional Summary" title="Professional Summary" value={props.professionalSummary} />
                </Col>
              </Row>
              <Button type="submit" className={classes.Mb_5}>
                  Save
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default personalInfo;
