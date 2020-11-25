import React, { useState } from "react";
import classes from './form.module.css';
import Propstypes from 'prop-types'

const TextArea = (props) => {
  const character = 200
  const [textAreaValue, setTextAreaValue] = useState(props.value.substr(0,character));
  const [textCount, setTextCount] = useState(props.value.length <= character ? character - props.value.length: 0);
  const [countColor, setCountColor] = useState((character - props.value.length) <= 10 ? "red":"green" );
  
  let onChange = (e) => {
    setTextAreaValue(e.target.value);
    setTextCount(character - e.target.value.length);
    props.changed(props.name, e.target.value)

    if ((character - e.target.value.length) <= 10) {
        setCountColor("red");
    } else {
        setCountColor("green");
    }
  };
  
  return (
    <div className={classes.textarea}>
        <textarea rows='4' maxLength={character} 
        className={classes.multiText} onChange={onChange}
        value={textAreaValue}
        name={props.name}></textarea>
        <span style={{ color: countColor }}>({textCount})</span>
    </div>
  );
};

TextArea.prototype = {
  changed: Propstypes.func.isRequired
}

export default TextArea;
