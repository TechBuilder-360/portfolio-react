import React from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeSkill } from "../../../../store/actions/portfolioActions";
import classes from "../../personal_info/personalInfo.module.css";
import SkillForms from "./skillForm";
import SubSkills from "./subSkill";
import SubSkillForm from "./subskillForms";

const Child = ({ skill, index }) => {
  const dispatch = useDispatch();

  return (
    <Card className={classes.Accordion_Child}>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={index}>
          {skill.title}
        </Accordion.Toggle>
        <Button
          variant="link"
          style={{ width: "20%", float: "right" }}
          onClick={() => dispatch(removeSkill(skill.id))}
        >
          Delete
        </Button>
      </Card.Header>
      <Accordion.Collapse eventKey={index}>
        <Card.Body>
          <SkillForms skill={skill} hide={true} />
          <SubSkills skillId={skill.id} />
          <SubSkillForm skillId={skill.id}/>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
export default Child;
