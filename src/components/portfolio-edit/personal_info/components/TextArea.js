import React,{useState} from "react";
import {  Form } from "react-bootstrap";


const TextArea=()=>{
const [textareavalue, setTextareavalue]=useState('')
const [textcount, setTextcount]=useState(0)
const [countcolor, setCountcolor]=useState('')

   let onChange=(e)=>{
setTextareavalue(e.target.value)
setTextcount(textareavalue.length)

if(textareavalue.length <=250)
    {
        setCountcolor('green')        
    }else{
        setCountcolor('red')
    }
    }

    


    return(
<div>

          <Form.Control onChange={onChange} value={textareavalue} as="textarea" rows="2" cols='3' />
         <span style={{color:countcolor}}> {textcount} </span>
         <span style={{color:'grey'}}>/250</span>
</div>
    )
}
export default TextArea