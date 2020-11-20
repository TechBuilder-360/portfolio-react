import React, { useEffect } from "react";
import classes from "./SignupForm.module.css";
import { Link } from "react-router-dom";
import googleLogo from "../../../google.svg";
import { Button, Form, Col } from "react-bootstrap";
import Layout from "../../../container/Layout/Layout";
import SocialButton from "../SocialButton";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import * as actions from "../../../store/actions/auth";
import { useHistory } from "react-router-dom";

const SignUpForm = () => {
  let firstName = React.createRef();
  let lastName = React.createRef();
  let email = React.createRef();
  let password = React.createRef();
  let confirm_password = React.createRef();
  let accept_policy = React.createRef();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth, shallowEqual);
  let history = useHistory();

  useEffect(() => {
    console.log(authState.username);
    if (authState.token){
      history.push(`/profile/${authState.username}/edit`)
    }
  },);

  const onSignupHandler = (event) => {
    event.preventDefault();
    console.log(firstName.current.value);
  };

  const handleSocialLogin = (user) => {
    dispatch(actions.googleAuthSuccess(user._token.accessToken));
  };

  const handleSocialLoginFailure = (err) => {
    dispatch(actions.googleAuthFail(err));
  };

  return (
    <Layout>
      <div className={classes.Container}>
        <p className="title">Sign up</p>

        <SocialButton
          provider="google"
          appId={`${process.env.REACT_APP_CLIENT_ID}`}
          onLoginSuccess={handleSocialLogin}
          onLoginFailure={handleSocialLoginFailure}
        >
          <i>
            <img src={googleLogo} alt="logo" style={{ width: "20px" }} />
          </i>
          &nbsp;&nbsp;Signup with Google
        </SocialButton>

        <div className={classes.Or}>
          <hr className={classes.Hr} /> or <hr className={classes.Hr} />
        </div>

        <Form onSubmit={onSignupHandler}>
          <Form.Row className={classes.Mb}>
            <Col>
              <Form.Control placeholder="First name" required ref={firstName} />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" required ref={lastName} />
            </Col>
          </Form.Row>

          <Form.Row className={classes.Mb}>
            <Col>
              <Form.Control
                type="email"
                placeholder="Email Address"
                required
                ref={email}
              />
            </Col>
          </Form.Row>

          <Form.Row className={classes.Mb}>
            <Col>
              <Form.Control
                type="password"
                required
                placeholder="Password"
                ref={password}
              />
            </Col>
          </Form.Row>

          <Form.Row className={classes.Mb}>
            <Col>
              <Form.Control
                type="password"
                required
                placeholder="Confirm Password"
                ref={confirm_password}
              />
            </Col>
          </Form.Row>

          <Form.Row className={classes.Mb}>
            <Col>
              <Form.Check
                type="checkbox"
                required
                label="I agree to the Terms and Privacy Policy"
                ref={accept_policy}
              />
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Button type="submit" variant="primary">
                Sign up
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
