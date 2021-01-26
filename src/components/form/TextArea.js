import React, { useState } from "react";
import classes from './form.module.css';
import Propstypes from 'prop-types'

const TextArea = (props) => {
  const character = props.maxLength || 200
  const row = props.row || 2
  let value = ''
  if(props.value){
    value = props.value.substr(0,character)
  }

  const [textAreaValue, setTextAreaValue] = useState();
  const [textCount, setTextCount] = useState(value.length <= character ? character - value.length: 0);
  const [countColor, setCountColor] = useState((character - value.length) <= 10 ? "red":'black' );
  
  let onChange = (e) => {
    setTextAreaValue(e.target.value);
    setTextCount(character - e.target.value.length);
    props.changed(props.name, e.target.value)

    if ((character - e.target.value.length) <= 10) {
        setCountColor("red");
    } else {
        setCountColor("black");
    }
  };
  
  return (
    <div className={classes.textarea}>
        <textarea rows={row} maxLength={character} 
        className={classes.multiText} onChange={onChange}
        value={textAreaValue}
        name={props.name}
        {...props}></textarea>
        <span className={classes.Span} style={{ color: countColor }}>({textCount})</span>
    </div>
  );
};

TextArea.prototype = {
  changed: Propstypes.func.isRequired,
  value: Propstypes.string.isRequired
}

export default TextArea;
