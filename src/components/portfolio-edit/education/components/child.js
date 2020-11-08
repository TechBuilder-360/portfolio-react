import React, { useState, useCallback } from "react";
import classes from "../../personal_info/personalInfo.module.css";
import SubEducation from "./educationForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Accordion,Card, useAccordionToggle} from "react-bootstrap"
import {
  faAngleDown,
  faAngleUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function CustomToggle({children,eventKey}){
const decoratedOnClick=useAccordionToggle(eventKey,()=>
console.log(eventKey)
)
return(
<a type="button" onClick={decoratedOnClick}> {children}</a>

)

}


const Child = (props) => {
  return (
    <div style={{paddingBottom:'15px'}}>
      <Card >
        <Card.Header>
        Organization
          <span style={{float: "Right"}}>
          <CustomToggle eventKey={props.i}>edit</CustomToggle>|
          <a type="button" onClick={props.removeMore}>delete</a>
          </span>
        </Card.Header>
        <Accordion.Collapse eventKey={props.i}>
       <Card.Body><SubEducation submithandler={props.submithandler} /></Card.Body>
        </Accordion.Collapse>
      </Card>
    
     



      
      
      </div>
    
  );
};
export default Child;
