import React, { Component } from "react";
import classes from "./SignupForm.module.css";
import { Link } from "react-router-dom";
import googleLogo from "../../../google.svg";
import { Button, Form, Col } from "react-bootstrap";
import Layout from '../../../container/Layout/Layout'
import SocialButton from '../SocialButton'

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
    this.confirm_password = React.createRef();
    this.accept_policy = React.createRef();
  }

  onSignupHandler = (event) => {
    event.preventDefault();
    console.log(this.firstName.current.value);
  };

  render() {
    return (
      <Layout>
      <div className={classes.Container}>
        <p className="title">Sign up</p>

        <SocialButton
            provider="google"
            appId={ `${process.env.REACT_APP_CLIENT_ID}` } // Used enviroment variable to store app id
            onLoginSuccess={this.handleSocialLogin}
            onLoginFailure={this.handleSocialLoginFailure}
          >
            <i>
              <img src={googleLogo} alt="logo" style={{ width: "20px" }} />
            </i>
            &nbsp;&nbsp;Signup with Google
          </SocialButton>

        <div className={classes.Or}>
          <hr className={classes.Hr} /> or <hr className={classes.Hr} />
        </div>

        <Form onSubmit={this.onSignupHandler}>
          <Form.Row className={classes.Mb}>
            <Col>
              <Form.Control
                placeholder="First name"
                required
                ref={this.firstName}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Last name"
                required
                ref={this.lastName}
              />
            </Col>
          </Form.Row>

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

          <Form.Row className={classes.Mb}>
            <Col>
              <Form.Control
                type="password"
                required
                placeholder="Confirm Password"
                ref={this.confirm_password}
              />
            </Col>
          </Form.Row>

          <Form.Row className={classes.Mb}>
            <Col>
              <Form.Check
                type="checkbox"
                required
                label="I agree to the Terms and Privacy Policy"
                ref={this.accept_policy}
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
                <Link className={classes.Link} to="/login" style={{ textDecoration: "none" }}>
                  &nbsp;Click here to login
                </Link>
            </Col>
          </Form.Row>
        </Form>
      </div>
      </Layout>
    );
  }
}

export default SignUpForm;
