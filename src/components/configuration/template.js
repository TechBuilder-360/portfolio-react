import React, { useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchTemplates, setTemplate } from '../../store/actions/portfolioActions'

const Template = () => {

    const dispatch = useDispatch()
    const template = useSelector(
        (state) => state.portfolio.template
      );
    const myTemplate = useSelector(
      (state) => state.portfolio.personalInfo.template
    );
    useEffect(() => {
        if(template.length === 0){
            dispatch(fetchTemplates())
        }
    },[]);  // eslint-disable-line react-hooks/exhaustive-deps

const templatesOptions = template.map((item, i) => (
    <option key={i} value={item.id}>
        {item.name}
    </option>
));
  return (
    <Row>
      <Col sm={6}>
        Resume Template
      </Col>
      <Col sm={6}>
        <Form.Group>
          <Form.Control 
            as="select" 
            name="label"
            onChange={ (e) => dispatch(setTemplate(e.target.value)) }
            value={myTemplate?myTemplate.id: ""}>
              <option value="">-----</option>
            {templatesOptions}
          </Form.Control>
        </Form.Group>
      </Col>
    </Row>
  );
};

export default Template;
