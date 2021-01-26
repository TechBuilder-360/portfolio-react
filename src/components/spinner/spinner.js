import React from 'react';
import { Spinner } from "react-bootstrap";
import classes from "./spinner.module.css"

const SpinnerElement = () => {
    return (
        <div className={classes.SpinnerBorder}>
            <Spinner animation="border" style={{width: "150px", height: "150px", borderWidth: "10px"}} role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}

export default SpinnerElement 