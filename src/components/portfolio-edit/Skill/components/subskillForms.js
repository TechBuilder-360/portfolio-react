import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import classes from "../../personal_info/personalInfo.module.css";
import { subskillAction } from "../../../../store/actions/portfolioActions";

const SkillForms = ({ skillId }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
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
              type="submit"
              variant="outline-primary"
              className="mt-15"
              size="sm"
              style={{ display: "block", position: "relative", top: "35px" }}
              disabled={isLoading}
            >
              {isLoading ? "Adding..." : "Add"}
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
export default SkillForms;
