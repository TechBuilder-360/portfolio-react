import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import classes from "../personalInfo.module.css";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const Experience=()=>{

  return(
    <div className={classes.wrapper}>
             <h2>Experience</h2><hr/>
    <Form>
               <Row>
                 <Col xs={12} md={6} className={classes.Mb_5}>
                 <Form.Group>
             <Form.Label>Organization</Form.Label>
                   <Form.Control size='lg'  />
                   </Form.Group>
                 </Col>
                 
                 <Col xs={12} md={6} className={classes.Mb_5}>
                 <Form.Group>
             <Form.Label>Position</Form.Label>
                   <Form.Control  size="lg"/>
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

                   <Col xs={12} md={12} className={classes.Mb_5}>
                   <Form.Group>
                   <Form.Label>Experience Summary</Form.Label>
                   <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        editor.ui.getEditableElement().parentElement.insertBefore(
                            editor.ui.view.toolbar.element,
                            editor.ui.getEditableElement()
                        );
                    } }
                 /*   onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }*/
                />
  
  </Form.Group>
 
</Col>
                   </Form>
                   <Button size="lg" style={{float:'right'}} type="submit" className={classes.Mb_5}>
               Save
           </Button>
                   </div>
    
    
    )


    






}

export default Experience