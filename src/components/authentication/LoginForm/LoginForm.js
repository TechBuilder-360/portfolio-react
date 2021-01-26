import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import classes from "../LoginForm/LoginForm.module.css";
import { Col, Form } from "react-bootstrap";
import Layout from "../../../container/Layout/Layout";
import { useHistory } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import SocialButton from "../SocialAuth/SocialButton";
import { loginAction } from "../../../store/actions/auth";
import { Input } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  ExclamationCircleOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Message from "../../Flash message/message";

const LoginForm = () => {
  const content = { email: "", password: "" };

  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth, shallowEqual);
  const [value, setValue] = useState(content);
  const [isLoading, setLoading] = useState(false);
  let history = useHistory();

  useEffect(() => {
    if (authState.token) {
      if (authState.authRedirectPath) {
        if (authState.authRedirectPath === "logout") {
          history.push(`/${authState.username}`);
        } else {
          history.push(authState.authRedirectPath);
        }
      } else {
        history.push(`/${authState.username}`);
      }
    } else if (isLoading) {
      setLoading(false);
    }
  }, [authState]); // eslint-disable-line react-hooks/exhaustive-deps

  const loginHandler = (event) => {
    event.preventDefault();
    // setLoading(true);
    dispatch(loginAction(value));
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {authState.error.length > 0
        ? <Message/>
        : null}
      <div className={classes.Container}>
        <p className="title">Sign in</p>

        <Form onSubmit={loginHandler}>
          <Form.Row className={classes.Mb}>
            <Col>
              <Input
                type="email"
                placeholder="Email Address"
                required
                name="email"
                onChange={handleChange}
                addonBefore={<MailOutlined />}
              />
            </Col>
          </Form.Row>

          <Form.Row className={classes.Mb}>
            <Col>
              <Input
                type="password"
                required
                placeholder="Password"
                name="password"
                autoComplete="on"
                onChange={handleChange}
                addonBefore={<ExclamationCircleOutlined />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Button variant="primary" type="submit" disabled={isLoading}>
                {isLoading ? "Loading..." : "Login"}
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

        <SocialButton title="Login" />

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
