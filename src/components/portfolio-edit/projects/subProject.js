import React from "react";
import { Button, Col, Form, Row ,Container} from "react-bootstrap";
import classes from "../personal_info/personalInfo.module.css";

const SubProjects=(props)=>{

return(

<Container>
      <Form onSubmit={props.submitHandler}>
        <Row>
          <Col xs={12} md={12} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>
          </Row>
          <Form.Group>
            <Form.Label>Project Descriptions</Form.Label>
          <Form.Control  as="textarea" rows="2" cols='3' />
          </Form.Group>
      </Form>
      <Button style={{ float: "right" }} type="submit" className={classes.Mb_5}>
        Save
      </Button>
      </Container>
        

)



}
export default SubProjects
