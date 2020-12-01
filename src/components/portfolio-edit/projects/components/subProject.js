import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Container from "../../../../container/Container";

import classes from "../../personal_info/personalInfo.module.css";
import PropTypes from "prop-types";
import TextArea from '../../../form/TextArea'
import {edit_project} from '../../../../store/actions/portfolioActions'


const SubProjects=({ project, closeForm,...props })=>{
  const dispatch = useDispatch();
  const [value, setValue] = useState(project);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
return(

<Container>
      <Form>
        
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Project Title</Form.Label>
              <Form.Control
                name="title"
                onChange={handleChange}
                value={value.title}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={12} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Project Descriptions</Form.Label>
        
          <TextArea value="The title of"/>
          </Form.Group>
            
            </Col>
          

          <div style={{ textAlign: "right" }}>
          <Button
            type="button"
            onClick={closeForm}
            className="btn btn-info mt-15 mr-2"
          >
            Cancel
          </Button>
          <Button
            onClick={()=>{

              dispatch(edit_project(props.index,value));
              closeForm();
            }
            }
            type="button"
            className="btn btn-primary mt-15"
          >
            Save
          </Button>
        </div>
      </Form>
      
      </Container>
        

)



}

SubProjects.prototype = {
  project: PropTypes.object,
  closeForm: PropTypes.func.isRequired,
};
export default SubProjects
