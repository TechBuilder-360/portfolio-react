import React from 'react';
import classes from "./spinner.module.css";
import { Spin } from 'antd';


const SpinnerElement = () => {
    return (
        <div className={classes.SpinnerBorder}>
            <Spin style={{width: "150px", height: "150px", borderWidth: "10px"}} size="large" />
        </div>
    )
}

export default SpinnerElement 