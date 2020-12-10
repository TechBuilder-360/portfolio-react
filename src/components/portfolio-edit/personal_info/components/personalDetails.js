import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import classes from "../personalInfo.module.css";
import InputDate from "../../../form/InputDate";
import TextArea from "../../../form/TextArea";
import { useDispatch } from "react-redux";
import { set_personalInfo } from "../../../../store/actions/portfolioActions"

const PersonalDetails = ({information}) => {


  const info = {
    first_name: "" || information.first_name,
    last_name: "" || information.last_name,
    middle_name: "" || information.middle_name,
    email: "" || information.email,
    phone: "" || information.phone,
    profession: "" || information.profession,
    languages: "" || information.languages,
    location: "" || information.location,
    gender: "" || information.gender,
    date_of_birth: information.date_of_birth,
    bio: "" || information.bio,
  }

  const dispatch = useDispatch()
  const [detail, onDetail] = useState(info)

  const onChangeHandler = (e) => {
    onDetail({...detail, [e.target.name]: e.target.value}) 
  }

  const componentChange = (name, value) => {
    onDetail({...detail, [name]: value}) 
  }

  const onSubmitHandler = (e) =>{
    e.preventDefault()
    dispatch(set_personalInfo(detail))
  }

  return (
    <Form onSubmit={onSubmitHandler}>
      <Row>
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="First name" required name="first_name" onChange={onChangeHandler} value={detail.first_name} />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="Last name" required name="last_name" onChange={onChangeHandler} value={detail.last_name} />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Middle Name</Form.Label>
            <Form.Control placeholder="Middle name" onChange={onChangeHandler} name="middle_name" value={detail.middle_name} />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" name="email" required onChange={onChangeHandler} placeholder="@" value={detail.email} />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="phone" name="phone" onChange={onChangeHandler} placeholder="+234" value={detail.phone} />
          </Form.Group>
        </Col>
        
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Profession</Form.Label>
            <Form.Control placeholder="Web Designer" onChange={onChangeHandler} name="profession" value={detail.profession}/>
          </Form.Group>
        </Col>

        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Languages (Maximum of 3)</Form.Label>
            <Form.Control placeholder=" English, French" onChange={onChangeHandler} name="languages" maxLength="100" value={detail.languages}/>
          </Form.Group>
        </Col>
      
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Location (State, Country)</Form.Label>
            <Form.Control placeholder="Kaduna, Nigeria" onChange={onChangeHandler} name="location" maxLength="50" value={detail.location}/>
          </Form.Group>
        </Col>
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select" name="gender" onChange={onChangeHandler} value={detail.gender} custom>
              <option value="">---</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </Form.Control>
          </Form.Group>
        </Col>
      
        <Col xs={12} md={3} className={classes.Mb_5}>
          <InputDate name="date_of_birth" changed={componentChange} value={detail.date_of_birth} label="Date of Birth"/>
        </Col>

        <Col xs={12} md={12} className={classes.Mb_5}>
        <Form.Group>
          <Form.Label>Professional Summary</Form.Label>
          <TextArea name="bio" changed={(name, value)=>componentChange(name, value)} value={detail.bio}/>
        </Form.Group>
        </Col>
     
        <Col xs={12} md={12} className={classes.Mb_5}>
        <Button
          type="submit"
          variant="light"
        >
          Save
        </Button>
        </Col>
      </Row>
    </Form>
  );
};
export default PersonalDetails;
