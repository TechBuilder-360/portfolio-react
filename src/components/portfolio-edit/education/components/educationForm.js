import React, { useState} from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Container from "../../../../container/Container";
import InputDate from "../../../form/InputDate";
import classes from "../../personal_info/personalInfo.module.css";
import { connect } from "react-redux";
import {add_education} from '../../../../store/actions/portfolioActions'


const EducationForm = (props) => {
 
const [edu, setEdu]=useState('University')
const [ins, setIns]=useState('LAUTECH')
const [course, setCourse]=useState('Computer Science')
const [degree,setDegree]=useState('BTech')
const [end, setEnd]=useState('')
const [start, setStart]=useState('') 

const content={
 education_type:edu,
  institution: ins,
  start_year: start,
  end_year: end,
  degree: degree,
  course: course,
}

  const handleAdd=()=>{
    props.add_education(content)
  }


  return (
    <Container>
      <Form>
        <Row>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Education Type</Form.Label>
              <Form.Control onChange={(e)=>setEdu(e.target.value)} value={edu} placeholder="Tertiary" />
            </Form.Group>
          </Col>

          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>School Attended</Form.Label>
              <Form.Control onChange={(e)=>setIns(e.target.value)} value={ins} placeholder="Harvard University" />
            </Form.Group>
          </Col>
        
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Degree</Form.Label>
              <Form.Control onChange={(e)=>setDegree(e.target.value)} value={degree}  placeholder="Bachelor of Science" />
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Course</Form.Label>
              <Form.Control onChange={(e)=>setCourse(e.target.value)} value={course} placeholder="Computer Science" />
            </Form.Group>
          </Col>
        
          <Col xs={12} md={6} className={classes.Mb_5}>
            <InputDate label="Start Year"/>
          </Col>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <InputDate label="End Year"  />
          </Col>
        </Row>
      </Form>

      {/* I recommend we remove button later in future and save form field onBlur
          We may still rethink this later, just a suggestion :)
      */}
      <div style={{textAlign: "right"}}>
      <Button
        type="button"
        onClick={props.closeForm}
        className="btn btn-info mt-15 mr-2"
      >
        Cancel
      </Button>
      <Button onClick={handleAdd}
        type="submit"
        className="btn btn-primary mt-15"
      >
        Save
      </Button>
      </div>
    </Container>
  );
}



export default connect(null,{add_education})(EducationForm);

