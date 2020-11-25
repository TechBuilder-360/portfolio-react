import React from "react";
import Container from "../../container/Container";

import classes from "./form.module.css";
import Main from './Main'



const InputDate = (props) => {

  return (
    <Container>
      <label className={classes.block}>{props.label}</label>
      <div>
                
                <Main />      
                            </div>

    </Container>
  );

}



export default InputDate;
