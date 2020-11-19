import React from "react";
import classes from "../personal_info/personalInfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Col, Form, Row } from "react-bootstrap";

const Child = (props) => {
  const socialNetworks = [
    "Facebook",
    "LinkedIn",
    "Twitter",
    "Instagram",
    "Github",
  ];

  let socialNetworkOptions = socialNetworks.map((item) => (
    <option key={item}>{item}</option>
  ));
  return (
    <div className={classes.container}>
      <div className={classes.drop}>
        <Form>
          <Row>
            <Col xs={12} md={5} className={classes.Mb_5}>
              <Form.Group>
                <Form.Label>Select Social Network</Form.Label>
                <Form.Control as="select" defaultValue={props.label} custom>
                  {socialNetworkOptions}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={6} className={classes.Mb_5}>
              <Form.Group>
                <Form.Label>Link to your page</Form.Label>
                <Form.Control value={props.link} />
              </Form.Group>
            </Col>
            <Col xs={12} md={1}>
              <Form.Group style={{ float: "right" }}>
                <FontAwesomeIcon
                  // className={classes.delete}
                  onClick={() => props.remove(props.id)}
                  icon={faTrash}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};
export default Child;
