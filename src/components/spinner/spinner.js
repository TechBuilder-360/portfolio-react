import React from 'react';
import { Spinner } from "react-bootstrap";

const SpinnerElement = () => {
    return (
        <div style={{ marginLeft: "50%" }}>
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}

export default SpinnerElement 