import { message } from "antd";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changePassword } from "../../store/actions/auth";
import passwordStrength from "check-password-strength";
import { Input } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const Password = () => {
  const content = {
    password: "",
    newPassword: "",
    confirmPassword: "",
    newPasswordStrength: "",
    confirmPasswordStrength: "",
  };

  const [value, setValue] = useState(content);

  const dispatch = useDispatch();
  const passwordChangeHandler = (e) => {
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

  const passwordSubmitandler = (e) => {
    e.preventDefault();

    if (value.newPassword !== value.confirmPassword) {
      return message.warning(
        "New password and confirm password does not match!",
        5
      );
    }
    if(value.newPasswordStrength === 0){
      return message.warning(
        "Password strenght is weak, try a mix of alphanumeric characters and symbols",
        5
      );
    }
    dispatch(changePassword(value));
  };

  const weak = {
    color: "Red",
  };

  const strong = {
    color: "green",
  };

  return (
    <Row>
      <Col sm={6}>Password Change</Col>
      <Col sm={6}>
        <Form onSubmit={passwordSubmitandler}>
          <Form.Row className="mb-3">
            <Col>
              <Input.Password
                type="password"
                placeholder="Old Password"
                minLength="6"
                required
                name="password"
                value={value.password}
                onChange={passwordChangeHandler}
                addonBefore={<ExclamationCircleOutlined />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Col>
          </Form.Row>
          <Form.Row className="mb-3">
            <Col>
              <Input.Password
                type="password"
                placeholder="New Password"
                required
                minLength="6"
                name="newPassword"
                value={value.newPassword}
                onChange={passwordChangeHandler}
                addonBefore={<ExclamationCircleOutlined style={(value.newPasswordStrength !== "")? (value.newPasswordStrength === 1)? strong: weak: null} />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Col>
          </Form.Row>
          <Form.Row className="mb-3">
            <Col>
              <Input.Password
                type="password"
                placeholder="Confirm Password"
                required
                name="confirmPassword"
                minLength="6"
                value={value.confirmPassword}
                onChange={passwordChangeHandler}
                addonBefore={<ExclamationCircleOutlined style={(value.confirmPasswordStrength !== "")? (value.confirmPasswordStrength === 1)? strong: weak: null}/>}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Col>
          </Form.Row>
          <Form.Row className="text-left">
            <Col>
              <Button type="submit" variant="primary">
                Change Password
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Col>
    </Row>
  );
};

export default Password;
