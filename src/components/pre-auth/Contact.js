import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Layout from "../../container/Layout/Layout";
import { Input, message } from "antd";
import {
  MailOutlined,
  UserOutlined
} from "@ant-design/icons";

const Contact = () => {
  const content = {
    fullname: "",
    email: "",
    message: "",
  };

  const [value, setValue] = useState(content);
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    
    setLoading(true);

    const form = evt.target;
    const data = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      setLoading(false);
      if (xhr.status === 200) {
        setValue(content)
        message.success("Thanks for your feedback", 5)
      } else {
        message.error("An error occured!", 5)
      }
    };
    xhr.send(data);
  }

  return (
    <Layout>
      <p className="title">Contact Us</p>
      
      <Form 
        onSubmit={onSubmitHandler}
        action="https://formspree.io/f/mzbkokgw"
        method="POST">
        <Form.Group>
          <Form.Label title="Required Field">Name*</Form.Label>
          <Input
            required={true}
            value={value.fullname}
            name="fullname"
            onChange={handleChange}
            placeholder="John Doe"
            addonBefore={<UserOutlined/>}
          />
        </Form.Group>
        <Form.Group>
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
        <Form.Group>
          <Form.Label title="Required Field">Message*</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            placeholder="Message"
            value={value.message}
            maxLength={300}
            required={true}
            rows="3"
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          type="submit"
          variant="success"
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