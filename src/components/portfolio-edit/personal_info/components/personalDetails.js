import React , {useState,useCallback} from 'react'
import {Col,Row,Form,Button} from 'react-bootstrap'
import classes from "../personalInfo.module.css";
import AddPersonalDetails from './addAdditionaDetails';
import Education from "./education";
import Experience from "./Experience";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown,faAngleUp} from '@fortawesome/free-solid-svg-icons'



const PersonalDetails=()=>{
         const [show,setShow]=useState(false)
        
     let onClick=useCallback(()=> {
      setShow(!show)

                  })

return(
         <div className={classes.wrapper}>
         <h2>Personal Details </h2><hr/>
         <Form>
           <Row>
             <Col xs={12} md={4} className={classes.Mb_5}>
             <Form.Group>
             <Form.Label>First Name</Form.Label>
               <Form.Control size='lg' placeholder="First name"  />
               </Form.Group>
             </Col>
             <Col xs={12} md={4} className={classes.Mb_5}>
             <Form.Group>
             <Form.Label>Last Name</Form.Label>
               <Form.Control placeholder="Last name" size='lg' />
               </Form.Group>
             </Col>
             <Col xs={12} md={4} className={classes.Mb_5}>
             <Form.Group>
             <Form.Label>Middle Name</Form.Label>
               <Form.Control placeholder="Middle name"  size="lg"/>
               </Form.Group>
             </Col>
           </Row>
           <Row>
             <Col xs={12} md={6} className={classes.Mb_5}>
             <Form.Group>
             <Form.Label>Email Address</Form.Label>
               <Form.Control
                 type="email" placeholder="@" size="lg"
               />
               </Form.Group>
             </Col>
             <Col xs={12} md={6} className={classes.Mb_5}>
             <Form.Group>
             <Form.Label>Phone Number</Form.Label>
               <Form.Control type="phone" placeholder="+234" size='lg' />
               </Form.Group>
             </Col>
             </Row>
           {show? <AddPersonalDetails  show={show}/>:''}

<div>
             <span onClick={onClick}>
              {show ? <span>hide additional Details  <FontAwesomeIcon icon={faAngleUp} size='lg' /></span>
              : 
              <span>Edit additional Details  <FontAwesomeIcon  icon={faAngleDown} size='lg'/> </span>
              }

               </span>
            

           <Button size="lg" style={{float:'right'}} type="submit" className={classes.Mb_5}>
               Save</Button>

           </div>
         </Form>

       
         <Education />

         
         <Experience/>
         

       

       </div>

)









}
export default PersonalDetails