import React from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeSkill } from "../../../../store/actions/portfolioActions";
import classes from "../../personal_info/personalInfo.module.css";
import SkillForms from "./skillForm";
import SubSkills from "./subSkill";
import SubSkillForm from "./subskillForms";

const Child = ({ skill, index }) => {
  const dispatch = useDispatch();
  const limit = process.env.REACT_APP_SUBSKILL_LIMIT
  const subskill = useSelector( state => state.portfolio.subskill.filter(sub=> sub.skill == skill.id))

  return (
    <Card className={classes.Accordion_Child}>
      <Card.Header>
        <Accordion.Toggle as={Button} className={classes.Button} variant="link" eventKey={index}>
          {skill.title}
        </Accordion.Toggle>
        <Button
          variant="link"
          className={classes.Card_Action}
          onClick={() => dispatch(removeSkill(skill.id))}
        >
          Delete
        </Button>
      </Card.Header>
      <Accordion.Collapse eventKey={index}>
        <Card.Body>
          <SkillForms skill={skill} hide={true} />
          <SubSkills skillId={skill.id} />
          {subskill.length < limit ? (
            <SubSkillForm skillId={skill.id} />
          ) : null}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
export default Child;
