import { faTimes,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { delete_skill} from "../../../../store/actions/portfolioActions";
import classes from "../../personal_info/personalInfo.module.css";




const Child = ({ skills,...props }) => {
  const dispatch = useDispatch()

  return (
    <div className={classes.span}>
      
        <span >{skills.title} <FontAwesomeIcon 
          onClick={() => dispatch(delete_skill(skills.id))}
        icon={faTimes} size="lg" /> </span>
   
            </div>
  );
};
export default Child;
