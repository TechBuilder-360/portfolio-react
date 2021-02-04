import React, { useEffect, useState } from "react";
import Layout from "../../../container/Layout/Layout";
import { Form, Col } from "react-bootstrap";
import classes from "./Password.module.css";
import { Input, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { resetPassword, loadingStart } from "../../../store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const PasswordReset = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const auth = useSelector((state) => state.auth.loading);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (loading && auth === false) {
      setRedirect(true)
    }
  }, [auth]); // eslint-disable-line react-hooks/exhaustive-deps

  const passwordResetHandler = (event) => {
    event.preventDefault();
    dispatch(loadingStart());
    setLoading(true);
    dispatch(resetPassword(email));
  };

  return (
    <Layout>
      { redirect?<Redirect
          to={{
            pathname: "/",
          }}
        />: null}
      <div className={classes.Container}>
        <p className="title">Reset Password</p>
        <Form onSubmit={passwordResetHandler}>
          <Col>
            <Form.Label>Reset Password</Form.Label>
            <Input
              type="email"
              placeholder="Email Address"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              addonBefore={<MailOutlined />}
            />
          </Col>
          <Col sm={12} md={6} className={classes.Mt_12}>
            <Button type="primary" loading={loading} htmlType="submit">
              Reset
            </Button>
          </Col>
        </Form>
      </div>
    </Layout>
  );
};

export default PasswordReset;
