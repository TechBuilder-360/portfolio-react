import React from 'react';
import classes from "./toggleSwitch.module.css";

const ToggleSwitch = ({checked, onChange}) => (
    <div>
        <label className={classes.switch}>
        <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        />
        <span className={`${classes.slider} ${classes.round}`}></span>
        </label>     
    </div>
  );

export default ToggleSwitch;