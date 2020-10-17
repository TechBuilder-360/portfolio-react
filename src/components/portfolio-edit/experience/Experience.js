import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import classes from "../personal_info/personalInfo.module.css";
import style from "../profile-edit.module.css";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


const submitHandler = (evt) =>{
  evt.preventDefault()
  console.log("evt");
}

const Experience = () => {
  return (
    <div className={style.SubSection}>
      <p className='title'>Experience</p>
      <hr />
      <Form onSubmit={submitHandler}>
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
            <CKEditor
              editor={ClassicEditor}
              data=""
              onInit={(editor) => {
                // You can store the "editor" and use when it is needed.
                editor.ui
                  .getEditableElement()
                  .parentElement.insertBefore(
                    editor.ui.view.toolbar.element,
                    editor.ui.getEditableElement()
                  );
              }}
            />
          </Form.Group>
      </Form>
      <Button style={{ float: "right" }} type="submit" className={classes.Mb_5}>
        Save
      </Button>
    </div>
  );
};

export default Experience;
