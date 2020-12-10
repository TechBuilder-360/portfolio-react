import React, {useState} from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import classes from "../../personal_info/personalInfo.module.css";

const AddForm = ({skill, ...props}) => {

  const dispatch = useDispatch();
  const [value, setValue] = useState();
  console.log(value);

  return (
    <Container>
      <Form>
        <Row>
          <Col sm={12} md={8} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Skill</Form.Label>
              <Form.Control
                name="title"
                onChange={(e)=> setValue(e.target.value)}
                placeholder="Accounting"
                value={value}
              />
            </Form.Group>
          </Col>
          <Col sm={12} md={12}  className={classes.Mb_5}>
              <Button 
                type="submit" 
                variant="success"> Add 
              </Button>
              <Button 
                variant="danger" 
                style={{marginRight: "10px"}}
                onClick={()=>props.closeForm()}> Cancel 
              </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AddForm;
