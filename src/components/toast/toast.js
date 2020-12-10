import React, {useState} from 'react';
import Toast from 'react-bootstrap/Toast';
import { Row, Col } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import {resetError} from "../../store/actions/auth"

const ToastMessgage = (props) => {
    const dispatch = useDispatch();
    const [showA, setShowA] = useState(true);
  
    const toggleShowA = () => {
        setShowA(!showA);
        dispatch(resetError())
    }

    return (
        <div style={{position: "absolute"}}>
            <Row>
                <Col sm={12}>
                    <Toast show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                        <strong className="mr-auto">{props.headerText}</strong>
                    </Toast.Header>
                    <Toast.Body>{props.bodyText}</Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </div>
        
    )
}

export default ToastMessgage
