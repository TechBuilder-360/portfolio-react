import React, { useState } from "react";
import classes from './form.module.css';
import Propstypes from 'prop-types'

const TextArea = ({value}) => {
  const character = 200
  const [textAreaValue, setTextAreaValue] = useState(value.substr(0,character));
  const [textCount, setTextCount] = useState(value.length <= character ? character - value.length: 0);
  const [countColor, setCountColor] = useState((character - value.length) <= 10 ? "red":"green" );
  
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
        <textarea rows='2' maxLength={character} 
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
