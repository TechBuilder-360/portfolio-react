import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Accordion, Button, Col, Form, Row, Container } from "react-bootstrap";
import SubSkill from "./subSkill";
import classes from "../../personal_info/personalInfo.module.css";
import { add_skill, edit_skill, edit_subskill } from "../../../../store/actions/portfolioActions";

const SkillForms = ({ skill, closeForm, ...props }) => {
  const content = {
    id: skill.id || "",
    title: skill.title || "",
  };

  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const [title, setTitle] = useState();

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <Container >
      <Form>
        <Row>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                onChange={handleChange}
                placeholder="Accounting"
                required={true}
              
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Button
              variant="success"
              style={{ display: "block", position: "relative", top: "35px" }}
              onClick={()=> dispatch(edit_skill(props.index,value))}
            >
              Enter
            </Button>
          </Col>
          {/* Sub-skills */}
          <Col xs={12} md={12}>
            <SubSkill skill={skill.subskill || []} index={props.index} />
          </Col>
          {/* End Sub-skills */}
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Sub-skill</Form.Label>
              <Form.Control
                name="name"
                onChange={handleChange}
                placeholder="Accounting"
                required={true}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Button
              variant="success"
              style={{ display: "block", position: "relative", top: "35px" }}
onClick={()=>dispatch(edit_subskill(props.index,value))}
            >
              Enter
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
export default SkillForms;
