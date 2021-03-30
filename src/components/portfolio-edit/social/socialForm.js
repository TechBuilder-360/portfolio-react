import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Container from "../../../container/Container";
import classes from "../personal_info/personalInfo.module.css";
import { useDispatch, useSelector } from "react-redux";
import { socialAction, delete_social } from "../../../store/actions/portfolioActions";

const SocialForm = ({link, label, id, closeForm}) => {

  const message = useSelector(state => state.portfolio.message)
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setLoading(false);
    }
  },[message]); // eslint-disable-line react-hooks/exhaustive-deps

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
    setLoading(true);
    dispatch(socialAction(value))
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
                placeholder="https://<your_url>"
                onChange={e=>setValue({ ...value, [e.target.name]: e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={12} style={{ textAlign: "right" }}>
            {value.id ? null: <Button style={{marginRight: "6px"}} variant="outline-danger" size="sm" onClick={closeForm}>Cancel</Button> }
            <Button
              type="submit"
              variant="outline-primary"
              className="mt-15"
              size="sm"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save"}
            </Button>
            {value.id ?
            <Button
              variant="outline-danger"
              className="ml-1 mt-15"
              size="sm"
              onClick={() => dispatch(delete_social(id))}
            >
              Delete
            </Button>
            : null }
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
export default SocialForm;
