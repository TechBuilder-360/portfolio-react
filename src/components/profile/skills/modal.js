import React from 'react';
import { Modal } from 'react-bootstrap';
import { List } from 'antd';

const ProjectModal = (props) => {

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
        <List
          dataSource={props.subskills}
          renderItem={item => (
            <List.Item>
              {item.title}
            </List.Item>
          )}
        />
        </Modal.Body>
      </Modal>
    );
};

export default ProjectModal

