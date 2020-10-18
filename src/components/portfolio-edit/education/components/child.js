import React,{useState,useCallback} from "react";
import classes from "../../personal_info/personalInfo.module.css";
import SubEducation from '../components/education'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown,faAngleUp, faTrash} from '@fortawesome/free-solid-svg-icons'
import { Row,Col } from "react-bootstrap";


const Child = (props) => {
  const [show,setShow]=useState(false)
  
  let onClick=useCallback(()=> {
    setShow(!show)
                })
  return (
    <div>
    <Row>
    <Col md={11}>
      <div className={classes.drop} >
      <div style={{height:'100%', margin:'10px 0px 20px 0px'}} onClick={onClick}>
              {show ? <div style={{fontSize:'20pt'}}>Hide  
              <div style={{float:'right'}}> 
              <FontAwesomeIcon icon={faAngleUp} size='4x' />
              </div>
              </div>
              : 
              <div style={{fontSize:'20pt'}}>
              Show  
              <div style={{float:'right'}}>
              <FontAwesomeIcon  icon={faAngleDown} size='4x'/> 
              </div>
               </div>
              } 
              </div>

{show?
       <SubEducation/>
:""}

         </div>
         </Col>
         <Col md={1} className={classes.delete}>
         <FontAwesomeIcon onClick={props.removeMore} icon={faTrash} size="lg" />
         </Col>
         </Row>
         </div>
 
  );
};
export default Child;
