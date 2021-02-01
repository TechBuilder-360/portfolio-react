import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Layout from "../../../container/Layout/Layout";
import { Form, Col } from "react-bootstrap";
import { Button, Input, message } from "antd";
import classes from "./Password.module.css";
import { Redirect } from "react-router-dom";
import passwordStrength from "check-password-strength";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { loadingStart, resetPasswordToken } from "../../../store/actions/auth";

const PasswordReset = () => {
  const { token } = useParams();
  const auth = useSelector((state) => state.auth.loading, shallowEqual);
  const dispatch = useDispatch();

  const content = {
    password: "",
    confirm_password: "",
    token: token,
  };

  const [value, setValue] = useState(content);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (loading && auth === false) {
      setRedirect(true)
    }
  }, [auth]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e) => {
    let strenght = "";
    if (e.target.value !== "") {
      strenght = passwordStrength(e.target.value).id;
    }
    setValue({
      ...value,
      [e.target.name]: e.target.value,
      [e.target.name + "Strength"]: strenght,
    });
  };

  const weak = {
    color: "Red",
  };

  const strong = {
    color: "green",
  };

  const passwordChangeHandler = (event) => {
    event.preventDefault();

    if (value.password !== value.confirm_password) {
      return message.warning(
        "Password and confirm password does not match!",
        5
      );
    }
    if (value.passwordStrength === 0) {
      return message.warning(
        "Password is weak, try a mix of alphanumeric characters and symbols",
        5
      );
    }
    setLoading(true)
    dispatch(loadingStart());
    dispatch(resetPasswordToken(value));
  };

  return (
    <Layout>
      { redirect?<Redirect
          to={{
            pathname: "/",
          }}
        />: null}
      <div className={classes.Container}>
        <p className="title">Change Password</p>

        <Form onSubmit={passwordChangeHandler}>
          <Col sm={12} md={12} className={classes.Mt_12}>
            <Form.Label>Password</Form.Label>
            <Input.Password
              placeholder="Password"
              name="password"
              required
              value={value.password}
              onChange={handleChange}
              autoComplete="on"
              addonBefore={
                <ExclamationCircleOutlined
                  style={
                    value.password !== ""
                      ? value.passwordStrength === 1
                        ? strong
                        : weak
                      : null
                  }
                />
              }
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Col>
          <Col sm={12} md={12} className={classes.Mt_12}>
            <Form.Label>Confirm Password</Form.Label>
            <Input.Password
              placeholder="Confirm Password"
              name="confirm_password"
              required
              value={value.confirm_password}
              onChange={handleChange}
              autoComplete="on"
              addonBefore={
                <ExclamationCircleOutlined
                  style={
                    value.confirm_password !== ""
                      ? value.confirm_passwordStrength === 1
                        ? strong
                        : weak
                      : null
                  }
                />
              }
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Col>
          <Col sm={12} md={6} className={classes.Mt_12}>
            <Button type="primary" loading={loading} htmlType="submit">
              Send
            </Button>
          </Col>
        </Form>
      </div>
    </Layout>
  );
};

export default PasswordReset;
