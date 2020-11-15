import React, { useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import googleLogo from "../../../google.svg";
import { Link } from "react-router-dom";
import classes from "../LoginForm/LoginForm.module.css";
import { Form, Col } from "react-bootstrap";
import Layout from "../../../container/Layout/Layout";
import SocialButton from "../SocialButton";
import { useHistory } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import * as actions from "../../../store/actions/auth";

const LoginForm = () => {
  const email = useRef(null);
  const password = useRef(null);
  const authState = useSelector((state) => state.auth, shallowEqual);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    if (authState.token) {
      history.push(`/profile/${authState.username}`);
    }
  },);

  const loginHandler = (event) => {
    event.preventDefault();
  };

  const handleSocialLogin = (user) => {
    dispatch(actions.sessionAuthStart());
    dispatch(actions.googleAuthSuccess(user._token.accessToken));
  };

  const handleSocialLoginFailure = (err) => {
    console.error("google auth fail", err);
    dispatch(actions.googleAuthFail(err));
  };

  return (
    <Layout>
      <div className={classes.Container}>
        <p className="title">Sign in</p>

        <Form onSubmit={loginHandler}>
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
          <Form.Row>
            <Col>
              <Button type="submit" variant="primary">
                Login
              </Button>
            </Col>
            <Col>
              <Link to="/passwordreset" className={classes.Link}>
                Forgot Password?
              </Link>
            </Col>
          </Form.Row>
        </Form>

        <div className={classes.Or}>
          <hr className={classes.Hr} /> or <hr className={classes.Hr} />
        </div>

        <SocialButton
          provider="google"
          appId={`${process.env.REACT_APP_CLIENT_ID}`}
          onLoginSuccess={handleSocialLogin}
          onLoginFailure={handleSocialLoginFailure}
        >
          <i>
            <img src={googleLogo} alt="logo" style={{ width: "20px" }} />
          </i>
          &nbsp;&nbsp;Login with Google
        </SocialButton>

        <div
          style={{
            marginTop: "20px",
            color: "#515151",
          }}
        >
          <p>
            Don't have an account?&nbsp;
            <Link to="/signup" style={{ textDecoration: "none" }}>
              &nbsp;Click here
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default LoginForm;
