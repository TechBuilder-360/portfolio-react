import React, { useState } from "react";
import { Form } from "react-bootstrap";

const TextArea = (props) => {
  const character = 200
  const [textAreaValue, setTextAreaValue] = useState(props.value.substr(0,character));
  const [textCount, setTextCount] = useState(props.value.length <= 200 ? props.value.length: 200 );
  const [countColor, setCountColor] = useState(props.value.length <= character ? "green":"red" );
  
  let onChange = (e) => {
    setTextAreaValue(e.target.value);
    setTextCount(e.target.value.length);

    if (textAreaValue.length <= character) {
      setCountColor("green");
    } else {
      setCountColor("red");
    }
  };
  
  return (
    
    <div>
      <Form.Control onChange={onChange} value={textAreaValue} maxLength={character} as="textarea" rows="3" cols='3'/>
      <span style={{ color: countColor }}>{textCount}</span>
      <span style={{ color: "grey" }}>/{character}</span>
    </div>
  );
};
export default TextArea;
