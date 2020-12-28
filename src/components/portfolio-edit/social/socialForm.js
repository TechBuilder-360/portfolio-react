import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Container from "../../../container/Container";
import classes from "../personal_info/personalInfo.module.css";
import { useDispatch } from "react-redux";
import {
  socialAction
} from "../../../store/actions/portfolioActions";

const SocialForm = ({link, label, id, closeForm}) => {

  const dispatch = useDispatch();
  const socialNetworks = [
    "Facebook",
    "LinkedIn",
    "Twitter",
    "Instagram",
    "Github",
  ];

  const content = {
    url: link || "",
    label: label || socialNetworks[0],
    id: id || ""
  }

  const [value, setValue] = useState(content)

  const socialNetworkOptions = socialNetworks.map((item, i) => (
    <option key={i} value={item}>{item}</option>
  ));

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(socialAction(value))
    if(!value.id){
      closeForm();
    }
  };

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Row>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Select Social Network</Form.Label>
              <Form.Control
                as="select"
                name="label"
                value={value.label}
                required={true}
                onChange={e=>setValue({ ...value, [e.target.name]: e.target.value })}
                custom
              >
                {socialNetworkOptions}
              </Form.Control>
            </Form.Group>
          </Col>

          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Link to your page</Form.Label>
              <Form.Control
                type="url"
                name="url"
                required={true}
                value={value.url}
                onChange={e=>setValue({ ...value, [e.target.name]: e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={12} style={{ textAlign: "right" }}>
          {value.id ? null: <Button style={{marginRight: "6px"}} onClick={closeForm}>Cancel</Button> }
            <Button
              type="submit"
              className="btn btn-primary mt-15"
            >
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
export default SocialForm;
