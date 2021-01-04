import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import classes from "./skills.module.css";

const ProjectModal = (props) => {
  const children = props.subskills.map((sub, i) => (
    <li className={classes.li} key={i}>
      {sub.title}
    </li>
  ));
    return (
        <Modal
        size = "lg"
        dialogClassName="modal-60w modal-50h"
        scrollable={true}
        centered={true}
         show={props.show} onHide={()=>props.handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>{props.skill}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>props.handleClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
};

export default ProjectModal