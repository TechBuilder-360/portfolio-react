import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../../../container/Container";
import classes from "../../personal_info/personalInfo.module.css";
import { accomplishmentAction, deleteAccomplishment } from "../../../../store/actions/portfolioActions";
import TextArea from "../../../form/TextArea";
import PropTypes from "prop-types";

const AccompForm = ({ accomplishment, closeForm }) => {
  const content = {
    id: accomplishment.id || "",
    issuer: accomplishment.issuer || "",
    certificate: accomplishment.certificate || "",
    course: accomplishment.course || "",
    description: accomplishment.description || "",
  };
  const dispatch = useDispatch();
  const message = useSelector((state) => state.portfolio.message);
  const [value, setValue] = useState(content);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setLoading(false);
    }
  }, [message]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onChangeHandler = (name, txt) => {
    setValue({ ...value, [name]: txt });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setLoading(true);
    dispatch(accomplishmentAction(value));
    if (!value.id) {
      closeForm();
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Course</Form.Label>
              <Form.Control
                name="course"
                onChange={handleChange}
                value={value.course}
                placeholder="Business Administration"
                required={true}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Issuer</Form.Label>
              <Form.Control
                name="issuer"
                onChange={handleChange}
                value={value.issuer}
                placeholder="OXFORD MBA"
                required={true}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Certificate</Form.Label>
              <Form.Control
                type = "url"
                name="certificate"
                onChange={handleChange}
                value={value.certificate}
                placeholder="https://<your_url>"
                required={true}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={12} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <TextArea
                value={value.description}
                name="description"
                changed={(name, value) => onChangeHandler(name, value)}
                required={true}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={12} style={{ textAlign: "right" }}>
            {value.id ? null : (
              <Button
                style={{ marginRight: "6px" }}
                variant="outline-danger"
                size="sm"
                onClick={closeForm}
              >
                Cancel
              </Button>
            )}
            <Button
              type="submit"
              variant="outline-primary"
              className="mt-15"
              size="sm"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save"}
            </Button>
            {value.id ?
            <Button
              variant="outline-danger"
              className="mt-15 ml-1"
              size="sm"
              onClick={() => dispatch(deleteAccomplishment(value.id))}
            >
              Delete
            </Button>
            : null }
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

AccompForm.prototype = {
  accomplishment: PropTypes.object,
  closeForm: PropTypes.func.isRequired,
};

export default AccompForm;
