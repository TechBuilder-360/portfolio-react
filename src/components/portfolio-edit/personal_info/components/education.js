import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import classes from "../personalInfo.module.css";

const Education=()=>{

return(
<div className={classes.wrapper}>
         <h2>Education</h2><hr/>

         
       
<Form>
           <Row>
             <Col xs={12} md={6} className={classes.Mb_5}>
             <Form.Group>
             <Form.Label>Education Type</Form.Label>
               <Form.Control size='lg' placeholder="E.g Tertiary"  />
               </Form.Group>
             </Col>
             
             <Col xs={12} md={6} className={classes.Mb_5}>
             <Form.Group>
             <Form.Label>School Attended</Form.Label>
               <Form.Control  size="lg"/>
               </Form.Group>
             </Col>
             </Row>
             <Row>
             <Col xs={12} md={6} className={classes.Mb_5}>
             <Form.Group>
             <Form.Label>Degree</Form.Label>
               <Form.Control placeholder="E.g B.sc"
                  size="lg" />
                  </Form.Group>
             </Col>
             <Col xs={12} md={6} className={classes.Mb_5}>
             <Form.Group>
             <Form.Label>Course</Form.Label>
               <Form.Control placeholder="E.g Computer Science" size={'lg'} />
               </Form.Group>
               </Col>
               </Row>
               <Row>
               <Col xs={12} md={6} className={classes.Mb_5}>
               <Form.Group>
             <Form.Label>Start Year</Form.Label>
               <Form.Control type="number"
                  size="lg" />
                  </Form.Group>
             </Col>
             <Col xs={12} md={6}  className={classes.Mb_5}>
             <Form.Group>
             <Form.Label>End Year</Form.Label>
               <Form.Control type='number' size={'lg'} />
               </Form.Group>
               </Col>  
               </Row>
               </Form>
              
               <Button size="lg" style={{float:'right'}} type="submit" className={classes.Mb_5}>
               Save
           </Button>
               </div>


)




}
export default Education