import React, { useRef, useState } from "react";
import Layout from "../../../container/Layout/Layout";
import { Form, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import tick from "../../../images/Flat_tick_icon.svg.png";
import classes from "./Password.module.css";

const PasswordReset = () => {
  const email = useRef(null);
  const [showSent, setShowSent] = useState(false);

  const passwordResetHandler = (event) => {
    event.preventDefault();
    console.log(email.current.value);
    setShowSent(true);
  };

  return (
    <Layout>
      <Form.Row className="text-center">
        <Col>
          <Form.Label>Reset Password</Form.Label>
        </Col>
      </Form.Row>
      {showSent ? (
        <div>
          <Form.Row className="text-center">
            <Form.Label>
              A password reset message has been sent to the email you entered
            </Form.Label>
          </Form.Row>
          <img
            className={[classes.Image, "img-responsive"].join(" ")}
            src={tick}
            alt="logo"
          />
        </div>
      ) : (
        <Form onSubmit={passwordResetHandler}>
          <Form.Row className="mb-3">
            <Col>
              <Form.Control
                type="email"
                placeholder="Email Address"
                required
                ref={email}
              />
            </Col>
          </Form.Row>
          <Form.Row className="text-center">
            <Col>
              <Button type="submit" variant="primary">
                Reset Password
              </Button>
            </Col>
          </Form.Row>
        </Form>
      )}
    </Layout>
  );
};

export default PasswordReset;
