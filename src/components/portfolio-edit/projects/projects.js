import React, { useEffect, useState } from "react";
import style from "../profile-edit.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import AddProject from "./components/addProjects";
import { Collapse } from 'antd';
import AddProjects from "./components/addProjects";


const Project = () => {

  const limit = process.env.REACT_APP_PROJECT_LIMIT
  const [form, setForm] = useState(null)
  const [formVisible, setFormVisible] = useState(false)
  const project = useSelector((state) => state.portfolio.project);
  const { Panel } = Collapse;

  const handleCloseForm = () => {
    setFormVisible(false)
  }
  

  useEffect(() => {
    if(formVisible){
      setForm(<AddProject project={project} closeForm={()=>handleCloseForm()}/>)
    }else{
      setForm(null)
    }
  }, [formVisible, setForm, project]); 


  // Populate accordion children with existing record
  const panels = project.map((proj, i) => (
    <Panel
      header={proj.title}
      showArrow={false}
      key={i}
    >
      <AddProjects project={proj} />
    </Panel>
  ));

  return (
    <div className={style.SubSection}>
      <p className="title">Project History</p>
      <hr />       
      <Collapse accordion >
      {panels}
      </Collapse>
      <hr/>
      {form}
      {project.length < limit ?  <span onClick={()=>setFormVisible(true)}> 
      <FontAwesomeIcon icon={faPlus} /> Add Project </span>
      : null}     
    </div>
  );
};

export default Project;