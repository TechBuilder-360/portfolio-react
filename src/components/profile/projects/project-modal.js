import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ProjectModal = (props) => {
    return (
        <Modal
        size = "lg"
        dialogClassName="modal-60w modal-50h"
        scrollable={true}
        centered={true}
         show={props.show} onHide={()=>props.handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>{props.project.title}</Modal.Title>
        </Modal.Header>
    <Modal.Body>
        {props.project.description}
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