import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { skillAction } from "../../../../store/actions/portfolioActions";
import classes from "../../personal_info/personalInfo.module.css";

const AddForm = ({ skill, closeForm, hide }) => {

  const content = {
    id: skill.id || "",
    title: skill.title || ""
  }
  const dispatch = useDispatch();
  const [value, setValue] = useState(content);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(skillAction(value));
    if(!hide){
      closeForm()
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={12} md={8} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Skill</Form.Label>
              <Form.Control
                name="title"
                onChange={(e)=> setValue({...value, title: e.target.value})}
                placeholder="Accounting"
                value={value.title}
                required={true}
              />
            </Form.Group>
          </Col>
          <Col sm={12} md={4} className={classes.Mb_5} style={{marginTop: '35px'}}>
            <Button type="submit" variant="success">
              Add
            </Button>
            {hide ? null : (
              <Button
                variant="danger"
                style={{ marginLeft: "2%" }}
                onClick={() => closeForm()}
              >
                Cancel
              </Button>
            )}
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AddForm;
