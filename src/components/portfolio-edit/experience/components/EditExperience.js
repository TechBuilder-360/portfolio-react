import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Container from "../../../../container/Container";
import MonthPicker from "../../../form/monthYearPicker/month_year_picker";
import classes from "../../personal_info/personalInfo.module.css";
import PropTypes from "prop-types";
import TextArea from '../../../form/TextArea'
import {edit_experience} from '../../../../store/actions/portfolioActions'

const EditExperience=({ experience,closeForm,...props })=>{
  const dispatch = useDispatch();
  const [value, setValue] = useState(experience);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onChangeHandler = (name, date) => {
    setValue({...value, [name]: date})
  }

return(

<Container>
      <Form>
        <Row>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Organization</Form.Label>
              <Form.Control
                name="organization"
                onChange={handleChange}
                value={value.organization}
                placeholder="Harvard University"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Position</Form.Label>
              <Form.Control
               name="position"
               onChange={handleChange}
               value={value.position}
              placeholder="Head of Sales" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6} className={classes.Mb_5}>
            <MonthPicker
              name="start_year"
              changeHandler={(name, value)=>onChangeHandler(name, value)}
              value={value.start_year}
              label="Start Year"
            />
          </Col>
          <Col xs={6} md={6} className={classes.Mb_5}>
            <MonthPicker
              name="end_year"
              changeHandler={(name, value)=>onChangeHandler(name, value)}
              value={value.end_year}
              label="End Year"
            />
          </Col>
        </Row>
          <Col xs={12} md={12} className={classes.Mb_5}>
          <Form.Group>
            <Form.Label>Experience Summary</Form.Label>
         <TextArea value={''}/>
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
                dispatch(edit_experience(props.index,value));
                closeForm();
            }}
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

EditExperience.prototype = {
  experience: PropTypes.object,
  closeForm: PropTypes.func.isRequired,
};

export default EditExperience
