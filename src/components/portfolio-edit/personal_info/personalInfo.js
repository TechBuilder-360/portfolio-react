import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import style from "../profile-edit.module.css";
import classes from "./personalInfo.module.css";
import Images from './components/image'
import PersonalDetails from './components/personalDetails'

const personalInfo = () => {
  return (
    <div className={style.SubSection}>
      <Container className={classes.main}>
        <Row>
         
           <Images/>
           
           <PersonalDetails/>
         
         </Row>

        

         

         
      
      </Container>
    </div>
  );
};

export default personalInfo;
