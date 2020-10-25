import React, { useState } from "react";
import { Form } from "react-bootstrap";

const TextArea = (props) => {
  const [textAreaValue, setTextAreaValue] = useState(props.value);
  const [textCount, setTextCount] = useState(props.value.length);
  const [countColor, setCountColor] = useState(props.value.length <= 250 ? "green":"red" );
  
  let onChange = (e) => {
    setTextAreaValue(e.target.value);
    setTextCount(textAreaValue.length);

    if (textAreaValue.length <= 250) {
      setCountColor("green");
    } else {
      setCountColor("red");
    }
  };
  
  return (
    
    <div>
      <Form.Control onChange={onChange} value={textAreaValue} as="textarea" rows="5" cols='3'/>
      <span style={{ color: countColor }}> {textCount} </span>
      <span style={{ color: "grey" }}>/250</span>
    </div>
  );
};
export default TextArea;
