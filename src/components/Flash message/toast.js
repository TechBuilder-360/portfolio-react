import React, {useState} from 'react';
import Toast from 'react-bootstrap/Toast';
import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import {clearError} from "../../store/actions/auth"
import classes from './toast.module.css';

const ToastMessgage = (props) => {
    const dispatch = useDispatch();
    const [showA, setShowA] = useState(true);
  
    const toggleShowA = () => {
        setShowA(!showA);
        dispatch(clearError())
    }

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div className={classes.toast}>
            <Row>
                <Col sm={12}>
                    <Toast show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                        <strong className="mr-auto">{props.headerText}</strong>
                    </Toast.Header>
                    <Toast.Body>{props.bodyText}</Toast.Body>
                    <Button onClick={refreshPage} className={classes.button}>Reload</Button>
                    </Toast>
                </Col>
            </Row>
        </div>
        
    )
}

export default ToastMessgage
