import React from "react";
import { Button, Col, Form, Row ,Container} from "react-bootstrap";
import classes from "../personal_info/personalInfo.module.css";
import TextArea from "../personal_info/components/TextArea";

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
        
          <TextArea value="The title of"/>
          </Form.Group>
      </Form>
      <Button style={{ float: "right" }} type="submit" className={classes.Mb_5}>
        Save
      </Button>
      </Container>
        

)



}
export default SubProjects
