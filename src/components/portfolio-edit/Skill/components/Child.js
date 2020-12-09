import React from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { delete_skill } from "../../../../store/actions/portfolioActions";
import SkillForms from "./SkillForms";

const Child = ({ skill, ...props }) => {

  const dispatch = useDispatch()
  

  return (
    <Card>
    <Card.Header >
      <Accordion.Toggle as={Button} variant="link" eventKey={props.i}>
        {skill.title}
      </Accordion.Toggle>
      <Button variant="link" style={{width: "20%", float: "right"}}
       onClick={()=>dispatch(delete_skill(skill.id))}>Delete</Button>
    </Card.Header>
    <Accordion.Collapse eventKey={props.i}>
      <Card.Body>
        <SkillForms 
        skill={skill}
        index={props.index}
        closeForm={null}/>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  );
};
export default Child;
