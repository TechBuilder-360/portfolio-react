import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import style from "../profile-edit.module.css";
import classes from "./personalInfo.module.css";
import avatar from "../../../images/avatar.webp";

const personalInfo = () => {
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
                  <Form.Control title="First name" placeholder="First name" />
                </Col>
                <Col xs={12} md={4} className={classes.Mb_5}>
                  <Form.Control placeholder="Last name" title="Last name" />
                </Col>
                <Col xs={12} md={4} className={classes.Mb_5}>
                  <Form.Control placeholder="Middle name" title="Middle name" />
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={4} className={classes.Mb_5}>
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    title="Email Address"
                  />
                </Col>
                <Col xs={12} md={4} className={classes.Mb_5}>
                  <Form.Control title="Gender" as="select" custom>
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
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={4} className={classes.Mb_5}>
                  <Form.Control title="Location" placeholder="State, Country" />
                </Col>
                <Col xs={12} md={4} className={classes.Mb_5}>
                  <Form.Control type="date" placeholder="Date of birth" title="Date of birth" />
                </Col>
                <Col xs={12} md={4} className={classes.Mb_5}>
                  <Form.Control title="Profession" placeholder="Profession" />
                </Col>
              </Row>
              <Row>
                <Col className={classes.Mb_5}>
                  <Form.Control as="textarea" rows="3" placeholder="Professional Summary" title="Professional Summary" />
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
