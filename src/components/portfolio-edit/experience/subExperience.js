import React from "react";
import { Button, Col, Form, Row ,Container} from "react-bootstrap";
import classes from "../personal_info/personalInfo.module.css";
import TextArea from "../personal_info/components/TextArea";

const SubEducation=(props)=>{

return(

<Container>
      <Form onSubmit={props.submitHandler}>
        <Row>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Organization</Form.Label>
              <Form.Control placeholder='Monetary Assurance'/>
            </Form.Group>
          </Col>

          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Position</Form.Label>
              <Form.Control placeholder="Head of Sales" />
            </Form.Group>
          </Col>
        
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Start Year</Form.Label>
              <Form.Control type="date"/>
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>End Year</Form.Label>
              <Form.Control type="date"/>
            </Form.Group>
          </Col>
        </Row>
          <Form.Group>
            <Form.Label>Experience Summary</Form.Label>
         <TextArea/>
          </Form.Group>
      </Form>
      <Button style={{ float: "right" }} type="submit" className={classes.Mb_5}>
        Save
      </Button>
      </Container>
        

)



}
export default SubEducation
