import React, { useEffect, useState } from "react";
import style from "../profile-edit.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Accordion } from "react-bootstrap";
import Child from "./components/Child";
import { connect, useDispatch } from "react-redux";
import classes from "../personal_info/personalInfo.module.css";
import ExperienceForm from "./components/ExperienceForm"
import { delete_experience } from "../../../store/actions/portfolioActions";


const Experience = (props) => {

  const dispatch = useDispatch()
  const [form, setForm] = useState(null)
  const [formVisible, setFormVisible] = useState(false)


  const handleCloseForm = () => {
    setFormVisible(false)
  }
  

  useEffect(() => {
    if(formVisible){
      setForm(<ExperienceForm experience={props.experience} closeForm={()=>handleCloseForm()}/>)
    }else{
      setForm(null)
    }
  }, [formVisible]);

  function handleDelete(index) {
      dispatch(delete_experience(index))
  }

  // Populate accordion children with existing record
  const children = props.experience.map((expp, i) => (
    <Child
      experience={expp}
      delete={(i)=> handleDelete(i) }
      closeForm={()=>setFormVisible(false)}
      i={i+1}
      index={i}
      key={i}
      onClick={(e)=>props.delete_success(i)}
    />
  ));

  return (
    <div className={style.SubSection}>
      <p className="title">Experience History</p>
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