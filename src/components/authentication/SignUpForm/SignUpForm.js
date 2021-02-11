import React, { useEffect, useState } from "react";
import classes from "./SignupForm.module.css";
import { Link } from "react-router-dom";
import { Button, Col, Form } from "react-bootstrap";
import Layout from "../../../container/Layout/Layout";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import passwordStrength from "check-password-strength";
import SocialButton from "../SocialAuth/SocialButton";
import { registrationAction } from "../../../store/actions/auth";
import { Input, message} from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  ExclamationCircleOutlined,
  MailOutlined,
  UserOutlined
} from "@ant-design/icons";


const SignUpForm = () => {
  const content = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: "",
    accept_policy: "",
    passwordStrength: "",
    confirm_passwordStrength: ""
  };

  const dispatch = useDispatch();
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
  }, [authState]); // eslint-disable-line react-hooks/exhaustive-deps

  const onSignupHandler = (event) => {
    event.preventDefault();

    if (value.password !== value.confirm_password) {
      return message.warning(
        "Password and confirm password does not match!",
        5
      );
    }
    if(value.passwordStrength === 0){
      return message.warning(
        "Password is weak, try a mix of alphanumeric characters and symbols",
        5
      );
    }
      setLoading(true);
      dispatch(registrationAction(value));
  };

  const handleChange = (e) => {
    let strenght = "";
    if (e.target.value !== "") {
      strenght = passwordStrength(e.target.value).id;
    }
    setValue({ ...value, [e.target.name]: e.target.value,
      [e.target.name + "Strength"]: strenght, });
  };

  const weak = {
    color: "Red",
  };

  const strong = {
    color: "green",
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
          <Form.Row className={classes.Mb}>
            <Col>
              <Input
                placeholder="First name"
                name="firstName"
                required
                onChange={handleChange}
                addonBefore={<UserOutlined/>}
              />
            </Col>
            <Col>
              <Input
                placeholder="Last name"
                name="lastName"
                required
                onChange={handleChange}
                addonBefore={<UserOutlined/>}
              />
            </Col>
          </Form.Row>

          <Form.Row className={classes.Mb}>
            <Col>
              <Input
                type="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
                name="email"
                addonBefore={<MailOutlined/>}
              />
            </Col>
          </Form.Row>

          <Form.Row className={classes.Mb}>
            <Col>
              <Input.Password
                type="password"
                required
                onChange={handleChange}
                placeholder="Password"
                name="password"
                autoComplete="on"
                addonBefore={<ExclamationCircleOutlined style={(value.passwordStrength !== "")? (value.passwordStrength === 1)? strong: weak: null} />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Col>
          </Form.Row>

          <Form.Row className={classes.Mb}>
            <Col>
              <Input.Password
                type="password"
                required
                onChange={handleChange}
                placeholder="Confirm Password"
                name="confirm_password"
                autoComplete="on"
                addonBefore={<ExclamationCircleOutlined style={(value.confirm_passwordStrength !== "")? (value.confirm_passwordStrength === 1)? strong: weak: null} />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Col>
          </Form.Row>

          {/* <Form.Row className={classes.Mb}>
            <Col>
              <Form.Check
                type="checkbox"
                required
                onChange={handleChange}
                label="I agree to the Terms and Privacy Policy"
                name="accept_policy"
              />
            </Col>
          </Form.Row> */}

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
