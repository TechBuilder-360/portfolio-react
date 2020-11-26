import React, { useEffect, useState } from "react";
import style from "../profile-edit.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Accordion } from "react-bootstrap";
import Child from "./components/child";
import { connect, useDispatch } from "react-redux";
import classes from "../personal_info/personalInfo.module.css";
import EducationForm from "./components/educationForm"
import { delete_education } from "../../../store/actions/portfolioActions";


const Education = (props) => {

  const dispatch = useDispatch()
  const [form, setForm] = useState(null)
  const [formVisible, setFormVisible] = useState(false)


  const handleCloseForm = () => {
    setFormVisible(false)
  }
  

  useEffect(() => {
    if(formVisible){
      setForm(<EducationForm closeForm={()=>handleCloseForm()}/>)
    }else{
      setForm(null)
    }
  }, [formVisible]);

  function handleDelete(index) {
      dispatch(delete_education(index))
  }

  // Populate accordion children with existing record
  const children = props.education.map((edu, i) => (
    <Child
      education={edu}
      delete={(i)=> handleDelete(i) }
      closeForm={()=>setFormVisible(false)}
      i={i+1}
      
      key={i}
      onClick={(e)=>props.delete_success(i)}
    />
  ));

  return (
    <div className={style.SubSection}>
      <p className="title">Education</p>
      <hr />
      {form}
      <Accordion className={classes.Accordion_Parent}>
        {children}
        </Accordion>
      
      <span onClick={()=>setFormVisible(true)}>
        <FontAwesomeIcon icon={faPlusCircle} size="lg" /> add more Education
      </span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    education: state.portfolio.education,
  };
};

export default connect(mapStateToProps)(Education);