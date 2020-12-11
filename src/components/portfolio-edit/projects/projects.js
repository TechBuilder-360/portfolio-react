import React, { useEffect, useState } from "react";
import style from "../profile-edit.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Accordion } from "react-bootstrap";
import Child from "./components/Child";
import { connect, useDispatch } from "react-redux";
import classes from "../personal_info/personalInfo.module.css";
import AddProject from "./components/addProjects"
import { deleteProject } from "../../../store/actions/portfolioActions";


const Project = (props) => {

  const dispatch = useDispatch()
  const [form, setForm] = useState(null)
  const [formVisible, setFormVisible] = useState(false)


  const handleCloseForm = () => {
    setFormVisible(false)
  }
  

  useEffect(() => {
    if(formVisible){
      setForm(<AddProject project={props.project} closeForm={()=>handleCloseForm()}/>)
    }else{
      setForm(null)
    }
  }, [formVisible]);

  function handleDelete(index) {
      dispatch(deleteProject(index))
  }

  // Populate accordion children with existing record
  const children = props.project.map((proj, i) => (
    <Child
      project={proj}
      delete={(i)=> handleDelete(proj.id) }
      closeForm={()=>setFormVisible(false)}
      i={i+1}
      index={i}
      key={i}
      onClick={(e)=>props.delete_success(i)}
    />
  ));

  return (
    <div className={style.SubSection}>
      <p className="title">Project History</p>
      <hr />
      <Accordion className={classes.Accordion_Parent}>
        {children}
        </Accordion>
        {form}
      <span onClick={()=>setFormVisible(true)}>
        <FontAwesomeIcon icon={faPlusCircle} size="lg" /> add more Project
      </span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    project: state.portfolio.project,
  };
};

export default connect(mapStateToProps)(Project);