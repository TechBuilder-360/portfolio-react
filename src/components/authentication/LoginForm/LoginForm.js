import React, { useRef, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import googleLogo from "../../../google.svg";
import { Link } from "react-router-dom";
import classes from "../LoginForm/LoginForm.module.css";
import { Form, Col } from "react-bootstrap";
import Layout from "../../../container/Layout/Layout";
import SocialButton from "../SocialButton";
import { Redirect } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import * as actions from "../../../store/actions/auth";

const LoginForm = (props) => {
  const email = useRef(null);
  const password = useRef(null);
  const authState = useSelector((state) => state.auth, shallowEqual);
  const dispatch = useDispatch()

  const [userName, setUserName] = useState(authState.username);

  useEffect(() => {
    setUserName(authState.username);
  },[authState.username]);

  const loginHandler = (event) => {
    event.preventDefault();
  };

  const handleSocialLogin = (user) => {
    dispatch(actions.sessionAuthStart());
    dispatch(actions.googleAuthSuccess(user._token.accessToken));
  };

  const handleSocialLoginFailure = (err) => {
    console.error('google auth fail', err);
    dispatch(actions.googleAuthFail(err));
  };

  if (userName) {
    return <Redirect to={`/profile/${userName}`} push={true} />;
  } else {
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
            appId={`${process.env.REACT_APP_CLIENT_ID}`} // Used environment variable to store app id
            onLoginSuccess={handleSocialLogin}
            onLoginFailure={handleSocialLoginFailure}
          >
            <i>
              <img src={googleLogo} alt="logo" style={{ width: "20px" }} />
            </i>
            &nbsp;&nbsp;Login with Google
          </SocialButton>

          {/* <Link to="/" onClick={this.googleLogin} className={classes.Button}>
            <i>
              <img src={googleLogo} alt="logo" style={{ width: "20px" }} />
            </i>
            &nbsp;&nbsp;Login with Google
          </Link> */}

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
  }
};

export default LoginForm;
