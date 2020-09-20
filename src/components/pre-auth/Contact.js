import React from "react";
import { Form, Button } from "react-bootstrap";
import classes from "./pre-auth.module.css";

const Contact = () => {

  const onSubmitHandler = (evt) =>{
      evt.preventDefault()
      console.log("Form Submitted");
  }

  return (
    <div>
        <p className='title'>Contact Us</p>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label title="Required Field">Name*</Form.Label>
          <Form.Control type="text" required={true} placeholder="John Doe" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label title="Required Field">Email address*</Form.Label>
          <Form.Control type="email" required={true} placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label title="Required Field">Message*</Form.Label>
          <Form.Control as="textarea" placeholder="Message" required={true} rows="3" />
        </Form.Group>
        <Button variant="success" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
