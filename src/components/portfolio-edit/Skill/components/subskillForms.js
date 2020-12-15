import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import classes from "../../personal_info/personalInfo.module.css";
import { subskillAction } from "../../../../store/actions/portfolioActions";

const SkillForms = ({ skillId }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(subskillAction(skillId, title));
    setTitle("");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Sub-skill</Form.Label>
              <Form.Control
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder=""
                required={true}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Button
              variant="success"
              type="submit"
              style={{ display: "block", position: "relative", top: "35px" }}
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