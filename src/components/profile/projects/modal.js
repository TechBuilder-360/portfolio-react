import React from 'react';
import { Modal } from 'react-bootstrap';

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
          <p>{props.project.description}</p>
          <p><a target="blank" href={props.project.projectUrl}>{props.project.projectUrl}</a></p>
        </Modal.Body>
      </Modal>
    );
};

export default ProjectModal