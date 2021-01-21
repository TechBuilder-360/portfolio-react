import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { skillAction, removeSkill } from "../../../../store/actions/portfolioActions";
import classes from "../../personal_info/personalInfo.module.css";

const AddForm = ({ skill, closeForm, hide }) => {

  const content = {
    id: skill.id || "",
    title: skill.title || ""
  }
  const dispatch = useDispatch();
  const [value, setValue] = useState(content);
  const message = useSelector(state => state.portfolio.message)
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setLoading(false);
    }
  },[message]); // eslint-disable-line react-hooks/exhaustive-deps
  
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true)
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
                placeholder="Enter skill name"
                required={true}
              />
            </Form.Group>
          </Col>
          <Col sm={12} md={4} className={classes.Mb_5} style={{marginTop: '35px'}}>
          <Button
              type="submit"
              variant="outline-primary"
              className="mt-15"
              size="sm"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save"}
            </Button>
            {value.id ? null : (
              <Button
                variant="danger"
                size="sm"
                style={{ marginLeft: "2%" }}
                onClick={() => closeForm()}
              >
                Cancel
              </Button>
            )}
            {value.id ?
            <Button
              variant="outline-danger"
              className="mt-15 ml-1"
              size="sm"
              onClick={() => dispatch(removeSkill(value.id))}
            >
              Delete
            </Button> : null
            }
            
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AddForm;
