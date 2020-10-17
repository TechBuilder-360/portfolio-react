import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import classes from "../personalInfo.module.css";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddPersonalDetails = () => {
  return (
    <div>
      <Row>
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Profession</Form.Label>
            <Form.Control placeholder="Web Designer"/>
          </Form.Group>
        </Col>

        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Language Spoken</Form.Label>
            <Form.Control placeholder=" English,French"/>
          </Form.Group>
        </Col>
      
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>State of Residence</Form.Label>
            <Form.Control/>
          </Form.Group>
        </Col>
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control/>
          </Form.Group>
        </Col>
     
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Place Of Birth</Form.Label>
            <Form.Control/>
          </Form.Group>
        </Col>
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Nationality</Form.Label>
            <Form.Control placeholder="Nigeria "/>
          </Form.Group>
        </Col>
      
        <Col xs={12} md={6} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control type="date"/>
          </Form.Group>
        </Col>
      </Row>
          <Form.Label>Professional Summary</Form.Label>
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
    </div>
  );
};

export default AddPersonalDetails;
