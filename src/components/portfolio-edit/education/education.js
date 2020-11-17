import React, { useEffect, useState } from "react";
import style from "../profile-edit.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Accordion } from "react-bootstrap";
import Child from "./components/child";
import { connect } from "react-redux";

import classes from "../personal_info/personalInfo.module.css";
import EducationForm from "./components/educationForm"


const Education = (props) => {

  const [form, setForm] = useState(null)
  const [formVisible, setFormVisible] = useState(false)
  

  useEffect(() => {
    if(formVisible){
      setForm(<EducationForm  closeForm={()=>setFormVisible(false)}/>)
    }else{
      setForm(null)
    }
  }, [formVisible]);

  
  

  


  function removeMore(index) { // rethink function
  }

  // Populate accordion children with existing record
  const children = props.education.map((edu, i) => (
    <Child
      education={edu}
      removeMore={removeMore}
      closeForm={()=>setFormVisible(false)}
      i={i+1}
      key={i}
    />
  ));

  return (
    <div className={style.SubSection}>
      <p className="title">Education</p>
      <hr />
      <Accordion className={classes.Accordion_Parent}>{children}</Accordion>
      {form}
      <span onClick={()=>setFormVisible(true)}>
        <FontAwesomeIcon icon={faPlusCircle} size="lg" /> add more Education
      </span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    education: state.education,
  };
};

export default connect(mapStateToProps)(Education);