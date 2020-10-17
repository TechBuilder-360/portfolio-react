import React, { useState, useCallback } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import classes from "../personalInfo.module.css";
import AddPersonalDetails from "./addAdditionaDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const PersonalDetails = () => {
  const [show, setShow] = useState(false);

  let showAdditionalDetails = useCallback(() => {
    setShow(!show);
  });

  return (
    <Col xs={12} md={9}>
      <p className='title'>Personal Details </p>
      <hr />
      <Form>
        <Row>
          <Col xs={12} md={4} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First name" />
            </Form.Group>
          </Col>
          <Col xs={12} md={4} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last name"/>
            </Form.Group>
          </Col>
          <Col xs={12} md={4} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Middle Name</Form.Label>
              <Form.Control placeholder="Middle name"/>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="@"/>
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="phone" placeholder="+234"/>
            </Form.Group>
          </Col>
        </Row>
        {show ? <AddPersonalDetails show={show} /> : ""}

        <div style={{marginTop: "20px"}}>
          <span onClick={showAdditionalDetails}>
            {show ? (
              <span>
                hide additional Details{" "}
                <FontAwesomeIcon icon={faAngleUp}/>
              </span>
            ) : (
              <span>
                edit additional Details{" "}
                <FontAwesomeIcon icon={faAngleDown}/>{" "}
              </span>
            )}
          </span>

          <Button
            style={{ float: "right" }}
            type="submit"
            className={classes.Mb_5}
          >
            Save
          </Button>
        </div>
      </Form>
    </Col>
  );
};
export default PersonalDetails;
