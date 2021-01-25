import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import Layout from "../../container/Layout/Layout";
import { feedbackAction } from "../../store/actions/auth";
import { clearMessages } from "../../store/actions/portfolioActions";
import { Input } from "antd";
import {
  MailOutlined,
  UserOutlined
} from "@ant-design/icons";

const Contact = () => {
  const content = {
    fullName: "",
    email: "",
    message: "",
  };

  const dispatch = useDispatch();
  const msg = useSelector((state) => state.portfolio.message);
  const [value, setValue] = useState(content);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setLoading(false);
    }
    if (msg.messages.length > 0) {
      if(msg.alert === 'success'){
        setValue(content);
      }
      setTimeout(() => {
        dispatch(clearMessages());
        clearTimeout();
      }, 10000);
    }
  }, [msg]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (evt) => {
    evt.preventDefault();

    setLoading(true);
    dispatch(feedbackAction(value));
  };

  return (
    <Layout>
      <p className="title">Contact Us</p>
      
      <Form onSubmit={onSubmitHandler}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label title="Required Field">Name*</Form.Label>
          <Input
            required={true}
            value={value.fullName}
            name="fullName"
            onChange={handleChange}
            placeholder="John Doe"
            addonBefore={<UserOutlined/>}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label title="Required Field">Email address*</Form.Label>
          <Input
            type="email"
            name="email"
            value={value.email}
            required={true}
            placeholder="name@example.com"
            onChange={handleChange}
            addonBefore={<MailOutlined/>}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label title="Required Field">Message*</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            placeholder="Message"
            value={value.message}
            maxLength={255}
            required={true}
            rows="3"
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          type="submit"
          variant="primary"
          className="mt-15"
          size="sm"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send"}
        </Button>
      </Form>
    </Layout>
  );
};

export default Contact;
