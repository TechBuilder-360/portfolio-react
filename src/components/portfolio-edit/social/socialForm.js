import React, {useRef} from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Container from "../../../container/Container";
import classes from "../personal_info/personalInfo.module.css";
import { useDispatch } from "react-redux";
import { addSocialLink, editSocialLink } from "../../../store/actions/portfolioActions"

const SocialForm = (props) => {
  const inputLabel = useRef(null);
  const inputLink = useRef(null);
  const dispatch = useDispatch();
  const socialNetworks = [
    "Facebook",
    "LinkedIn",
    "Twitter",
    "Instagram",
    "Github",
  ];
  let socialNetworkOptions = socialNetworks.map((item) => (
    <option key={item}>{item}</option>
  ));
  let save = (inputLabel, inputLink) => {
    if (props.id){
      dispatch(editSocialLink({id: props.id, label:inputLabel, url:inputLink}))
    }else{
      dispatch(addSocialLink({id: Math.random(), label:inputLabel, url:inputLink}))
    }
    
    props.closeForm()
    
  };
  return (
    <Container>
      <Form>
        <Row>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Select Social Network</Form.Label>
              <Form.Control as="select" defaultValue={props.label} ref={inputLabel} custom>
                {socialNetworkOptions}
              </Form.Control>
            </Form.Group>
          </Col>

          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Link to your page</Form.Label>
              <Form.Control defaultValue={props.link} ref={inputLink} />
            </Form.Group>
          </Col>
        </Row>
      </Form>

      {/* I recommend we remove button later in future and save form field onBlur
          We may still rethink this later, just a suggestion :)
      */}
      <div style={{ textAlign: "right" }}>
        <Button
          type="button"
          onClick={props.closeForm}
          className="btn btn-info mt-15 mr-2"
        >
          Cancel
        </Button>
        <Button type="submit" className="btn btn-primary mt-15" onClick={() => save(inputLabel.current.value, inputLink.current.value)}>
          Save
        </Button>
      </div>
    </Container>
  );
};
export default SocialForm;
