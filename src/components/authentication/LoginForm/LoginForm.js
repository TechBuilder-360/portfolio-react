import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import googleLogo from "../../../google.svg";
import { Link } from "react-router-dom";
import classes from "../LoginForm/LoginForm.module.css";
import { Form, Col } from "react-bootstrap";
import Layout from "../../../container/Layout/Layout";
import SocialButton from '../SocialButton'


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
  }

  loginHandler = (event) => {
    event.preventDefault();
  };

  handleSocialLogin = (user) => {
    console.log(user)
  }
   
  handleSocialLoginFailure = (err) => {
    console.error(err)
  }


  render() {
    return (
      <Layout>
        <div className={classes.Container}>
          <p className="title">Sign in</p>

          <Form onSubmit={this.loginHandler}>
            <Form.Row className={classes.Mb}>
              <Col>
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  required
                  ref={this.email}
                />
              </Col>
            </Form.Row>

            <Form.Row className={classes.Mb}>
              <Col>
                <Form.Control
                  type="password"
                  required
                  placeholder="Password"
                  ref={this.password}
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
                <Link to="/" className={classes.Link}>
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
            appId={ `${process.env.REACT_APP_CLIENT_ID}` } // Used enviroment variable to store app id
            onLoginSuccess={this.handleSocialLogin}
            onLoginFailure={this.handleSocialLoginFailure}
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
}

export default LoginForm;
