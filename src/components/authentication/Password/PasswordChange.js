import React, { useRef, useState } from "react";
import Layout from "../../../container/Layout/Layout";
import { Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import classes from "./Password.module.css";

const PasswordReset = () => {
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const [changeSuccessful, setChangeSuccessful] = useState(false);

  const passwordChangeHandler = (event) => {
    event.preventDefault();
    console.log(password.current.value);
    console.log(confirmPassword.current.value);

    // Validate both password equality before setting setChangeSuccessful true
    setChangeSuccessful(true);
  };

  return (
    <Layout>
      <Form.Row className="text-center">
        <Col>
          <Form.Label>Change Password</Form.Label>
        </Col>
      </Form.Row>
      {changeSuccessful ? (
        <div>
          <Form.Row className="text-center">
            <Form.Label>Your Password has been changed successfully</Form.Label>
            <Link
              to="/login"
              className={[classes.Link, "btn btn-primary"].join(" ")}
            >
              Login
            </Link>
          </Form.Row>
        </div>
      ) : (
        <Form onSubmit={passwordChangeHandler}>
          <Form.Row className="mb-3">
            <Col>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                ref={password}
              />
            </Col>
          </Form.Row>
          <Form.Row className="mb-3">
            <Col>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                required
                ref={confirmPassword}
              />
            </Col>
          </Form.Row>
          <Form.Row className="text-center">
            <Col>
              <Button type="submit" variant="primary">
                Change Password
              </Button>
            </Col>
          </Form.Row>
        </Form>
      )}
    </Layout>
  );
};

export default PasswordReset;
