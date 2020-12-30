import React from 'react';
import { Spinner } from "react-bootstrap";

const SpinnerElement = () => {
    return (
        <div style={{marginLeft: "50%"}}>
            <Spinner animation="border" style={{width: "150px", height: "150px", borderWidth: "10px"}} role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}

export default SpinnerElement 