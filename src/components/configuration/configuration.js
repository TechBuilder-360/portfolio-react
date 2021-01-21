import React, { useState } from "react";
import classes from "../portfolio-edit/profile-edit.module.css";
import ToggleSwitch from "../ToggleSwitch/toggleSwitch";
import { Col, Row, Form } from "react-bootstrap";
import Container from "../../container/Container";

const Configuration = () => {
  const [downloadTemplate, setDownloadTemplate] = useState(false);

  const onChange = (newValue) => {
    setDownloadTemplate(newValue);
  };

  const templatesList = [
    "Default",
    "Template 1",
    "Template 2",
    "Template 3",
    "Template 4",
  ];

  const templatesOptions = templatesList.map((item, i) => (
    <option key={i} value={item}>
      {item}
    </option>
  ));

  // useEffect(() => {
  //     console.log(downloadTemplate)
  // }, [downloadTemplate])

  return (
    <Container>
      <div className={classes.Wrapper}>
          <section>
          <p className="title">Configurations</p>
            <hr />         
            <Row>
                <Col sm={6}>
                    <label>Show Download Button</label>
                </Col>
                <Col sm={6} >
                    <div className="float-right">
                    <ToggleSwitch id="toggleSwitch" checked={downloadTemplate} onChange={onChange} />
                    </div> 
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <label>Resume Template</label>
                </Col>
                <Col sm={6} >
                    <div className="float-right">
                    <Form.Group>
                        <Form.Control
                            as="select"
                            name="label"
                            // value={value.label}
                            // required={true}
                            // onChange={e=>setValue({ ...value, [e.target.name]: e.target.value })}
                            custom
                        >
                            {templatesOptions}
                        </Form.Control>
                    </Form.Group>
                    </div> 
                </Col>
            </Row>
          </section>
      </div>
    </Container>
  );
};

export default Configuration;