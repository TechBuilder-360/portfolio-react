import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import classes from "../../personal_info/personalInfo.module.css";
import { add_skill } from "../../../../store/actions/portfolioActions";

const SkillForms = ({ skills, closeForm, ...props }) => {
  const content = {
    id: "",
    title:'',
   
  };

  const dispatch = useDispatch();
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  
  return (
    <Container>
      <Form className={classes.form}>
          <Row>
          <Col xs={12} md={7} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label> Skill</Form.Label>
        <Form.Control as="select" name="title" onChange={handleChange} >
        <option value='' selected >Choose Skill</option>
        {props.skill.map((skill,i)=>(

<option key={i} value={skill.title} >{skill.title}</option>
))
}
        </Form.Control>
            </Form.Group>
          </Col>
          <Col md={5}></Col>
</Row>
<span>Add Subskills</span>
<Row>
    
    <Col xs={12} md={8}>
        <Form.Group>
            
            <Form.Control size={'lg'}></Form.Control>
        </Form.Group>

    </Col>
    <Col xs={12} md={4}>

        <Button size={'lg'}>Enter</Button>
    </Col>
</Row>

<Col xs={12} md={12} style={{textAlign: "right", marginTop:'30px'}}>
            <Button
              type="button"
              onClick={closeForm}
              className="btn btn-info mt-15 mr-2"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                dispatch(add_skill(value));
                closeForm();
              }}
              type="button"
              className="btn btn-primary mt-15"
            >
              Save
            </Button>
          </Col>
        </Form>
    </Container>
  );
};
export default SkillForms;
