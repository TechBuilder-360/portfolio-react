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
      <Col sm={6} md={8} style={{textAlign: "justify"}}>
        <table className="table table-borderless">
          <tbody>
            <tr>
              <td style={{width: "30%"}}> Resume Template </td>
              <td>
                <Form.Control 
                  as="select" 
                  name="label"
                  className="float-right"
                  onChange={ (e) => dispatch(setTemplate(e.target.value)) }
                  value={myTemplate?myTemplate.id: ""}>
                  {templatesOptions}
                </Form.Control>
              </td>
            </tr>
          </tbody>
        </table>  
      </Col>
    </Row>
  );
};

export default Template;
