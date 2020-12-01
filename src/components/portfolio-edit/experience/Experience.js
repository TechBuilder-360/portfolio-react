import React, { useEffect, useState } from "react";
import style from "../profile-edit.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Accordion } from "react-bootstrap";
import Child from "./child";
import { connect, useDispatch } from "react-redux";
import classes from "../personal_info/personalInfo.module.css";
import ExperienceForm from "./ExperienceForm"
import { delete_education } from "../../../store/actions/portfolioActions";


const Experience = (props) => {

  const dispatch = useDispatch()
  const [form, setForm] = useState(null)
  const [formVisible, setFormVisible] = useState(false)


  const handleCloseForm = () => {
    setFormVisible(false)
  }
  

  useEffect(() => {
    if(formVisible){
      setForm(<ExperienceForm closeForm={()=>handleCloseForm()}/>)
    }else{
      setForm(null)
    }
  }, [formVisible]);

  function handleDelete(index) {
      // dispatch(delete_education(index))
  }

  // Populate accordion children with existing record
  const children = props.experience.map((exp, i) => (
    <Child
      experience={exp}
      delete={ (i)=> handleDelete(i) }
      closeForm={()=>setFormVisible(false)}
      i={i+1}
      
      key={i}
      onClick={(e)=>props.delete_success(i)}
    />
  ));

  return (
    <div className={style.SubSection}>
      <p className="title">Experience</p>
      <hr />
      <Accordion className={classes.Accordion_Parent}>
        {children}
        </Accordion>
        {form}
      <span onClick={()=>setFormVisible(true)}>
        <FontAwesomeIcon icon={faPlusCircle} size="lg" /> add more Experience
      </span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    experience: state.portfolio.experience,
  };
};

export default connect(mapStateToProps)(Experience);