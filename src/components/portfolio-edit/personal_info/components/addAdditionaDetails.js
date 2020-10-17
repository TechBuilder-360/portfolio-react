import React from 'react'
import {Col,Row,Form} from 'react-bootstrap'
import classes from "../personalInfo.module.css";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const AddPersonalDetails=()=>{
         

return(   
          <div >
          <Row>
           <Col xs={12} md={6} className={classes.Mb_5}>
           <Form.Group>
             <Form.Label>Profession</Form.Label>
               <Form.Control  placeholder="E.g Web Designer" size='lg'/>
               </Form.Group>
             </Col>

             <Col xs={12} md={6} className={classes.Mb_5}>
             <Form.Group>
             <Form.Label>Language Spoken</Form.Label>
               <Form.Control  placeholder=" E.G English,French" size="lg" />
               </Form.Group>
             </Col>           
             </Row>
             
             <Row>
           <Col xs={12} md={6} className={classes.Mb_5}>
           <Form.Group>
             <Form.Label>State of Residence</Form.Label>
               <Form.Control size='lg'/>
               </Form.Group>
             </Col>
             <Col xs={12} md={6} className={classes.Mb_5}>
             <Form.Group>
             <Form.Label>Address</Form.Label>
               <Form.Control size='lg'/>
               </Form.Group>
             </Col>
             </Row>
             
             <Row>
             <Col xs={12} md={6} className={classes.Mb_5}>
             <Form.Group>
             <Form.Label>Place Of Birth</Form.Label>
               <Form.Control size="lg"/>
               </Form.Group>
             </Col>
             <Col xs={12} md={6} className={classes.Mb_5}>
             <Form.Group>
             <Form.Label>Nationality</Form.Label>
               <Form.Control  placeholder="E.g Nigeria " size="lg" />
               </Form.Group>
             </Col>
             </Row>
             
             <Row>
             
             <Col xs={12} md={6} className={classes.Mb_5}>
             <Form.Group>
             <Form.Label>Date Of Birth</Form.Label>
               <Form.Control type="date" size="lg" />
               </Form.Group>
             </Col>
             
             </Row>

             <Col xs={12} md={12} className={classes.Mb_5}>
             
             <Form.Group>
             <Form.Label>Professional Summary</Form.Label>
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

           </div>
           
           
)

}

export default AddPersonalDetails