import React, { useEffect, useState } from "react";
import classes from "./SignupForm.module.css";
import { Link } from "react-router-dom";
import { Alert, Button, Col, Form } from "react-bootstrap";
import Layout from "../../../container/Layout/Layout";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import passwordStrength from "check-password-strength";
import SocialButton from "../SocialAuth/SocialButton";
import { registrationAction } from "../../../store/actions/auth";
import { clearMessages, messages } from "../../../store/actions/portfolioActions";

const SignUpForm = () => {
  const content = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: "",
    accept_policy: ""
  };

  const dispatch = useDispatch();
  const msg = useSelector((state) => state.portfolio.message);
  const authState = useSelector((state) => state.auth, shallowEqual);
  const [value, setValue] = useState(content);
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (authState.token) {
      history.push(`/${authState.username}/`);
    } else if(isLoading) {
      setLoading(false);
    }
    if(msg.messages.length > 0){
      setTimeout(()=>{
        dispatch(clearMessages())
        clearTimeout()
      },10000)
    }
  }, [msg]); // eslint-disable-line react-hooks/exhaustive-deps

  const onSignupHandler = (event) => {
    event.preventDefault();

    if (value.password === value.confirm_password) {
      setLoading(true);
      dispatch(registrationAction(value));
    } else {
      dispatch(messages("Password does not match!", 'danger'));
    }
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <div className={classes.Container}>
        <p className="title">Sign up</p>

        <SocialButton title="Sign up" />

        <div className={classes.Or}>
          <hr className={classes.Hr} /> or <hr className={classes.Hr} />
        </div>

        <Form onSubmit={onSignupHandler}>
          {msg.messages.length > 0? 
            <Alert variant="danger">
              <ul>
              {msg.messages.map((m, i) => (
              <div key={i}>{m}</div>
            ))}
              </ul>
            </Alert> : null
          }
          <Form.Row className={classes.Mb}>
            <Col>
              <Form.Control
                placeholder="First name"
                name="firstName"
                required
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Last name"
                name="lastName"
                required
                onChange={handleChange}
              />
            </Col>
          </Form.Row>

          <Form.Row className={classes.Mb}>
            <Col>
              <Form.Control
                type="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
                name="email"
              />
            </Col>
          </Form.Row>

          <Form.Row className={classes.Mb}>
            <Col>
              <Form.Control
                type="password"
                required
                onChange={handleChange}
                placeholder="Password"
                name="password"
                autoComplete="on"
              />
              <span>
                {value.password ? passwordStrength(value.password).value : null}
              </span>
            </Col>
          </Form.Row>

          <Form.Row className={classes.Mb}>
            <Col>
              <Form.Control
                type="password"
                required
                onChange={handleChange}
                placeholder="Confirm Password"
                name="confirm_password"
                autoComplete="on"
              />
            </Col>
          </Form.Row>

          <Form.Row className={classes.Mb}>
            <Col>
              <Form.Check
                type="checkbox"
                required
                onChange={handleChange}
                label="I agree to the Terms and Privacy Policy"
                name="accept_policy"
              />
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Button variant="primary" type="submit" disabled={isLoading}>
                {isLoading ? "Submitting..." : "Submit"}
              </Button>
            </Col>
            <Col>
              <Link
                className={classes.Link}
                to="/login"
                style={{ textDecoration: "none" }}
              >
                &nbsp;Click here to login
              </Link>
            </Col>
          </Form.Row>
        </Form>
      </div>
    </Layout>
  );
};

export default SignUpForm;
