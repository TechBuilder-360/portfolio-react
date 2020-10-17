import React from 'react'
import {Col,Image} from 'react-bootstrap'
import avatar from "../../../../images/avatar.webp";
import classes from "../personalInfo.module.css";

const Images = () =>{

return(


         <Col xs={12} md={3}>
         <Image className={classes.Img} src={avatar} roundedCircle />
       </Col>



)

}

export default Images