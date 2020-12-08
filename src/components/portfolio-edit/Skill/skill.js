import { faTimes,faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState,useEffect} from "react";
import style from "../profile-edit.module.css";
import { connect, useDispatch } from "react-redux";
import Child from './components/Child'
import { Container } from 'react-bootstrap';
import SkillForms from './components/SkillForms'
import { delete_skill, skillAction } from "../../../store/actions/portfolioActions";

const Skill = (props) => {
    const dispatch = useDispatch()
    const [form, setForm] = useState(null)
    const [formVisible, setFormVisible] = useState(false)
  

    const handleCloseForm = () => {
        setFormVisible(false);
      };
    
      useEffect(() => {
        if (formVisible) {
          setForm(
            <SkillForms
              skill={props.skill}
              closeForm={() => handleCloseForm()}
            />
          );
        } else {
          setForm(null);
        }
      }, [formVisible]);

    
    const children = props.skill.map((skill, i) => (
        <Child
          skills={skill}
          key={i}
        />
      ));



    return (
        <div className={style.SubSection}>
            
            <p className="title">Skills</p>
            <hr />
            {children}

<br/>

{form}
<br/>
            <span onClick={()=>setFormVisible(true)}>
        <FontAwesomeIcon icon={faPlus} size="lg" /> add Skill
      </span>

            
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
      skill: state.portfolio.skills,
    };
  };
  
  export default connect(mapStateToProps)(Skill);
