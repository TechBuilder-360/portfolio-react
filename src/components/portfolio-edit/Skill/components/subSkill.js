import React from "react";
import { Container } from "react-bootstrap";
import classes from "../../personal_info/personalInfo.module.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteSubskillAction } from "../../../../store/actions/portfolioActions";
import { useDispatch, useSelector } from "react-redux";

const SubSkill = ({ skillId }) => {
  const dispatch = useDispatch();
  const subskill = useSelector( state => state.portfolio.subskill.filter(sub=> sub.skill === skillId ))

  const children = subskill.map((sub, i) => (
    <li className={classes.li} key={i}>
      {sub.title}
      <FontAwesomeIcon
        size="sm"
        className={classes.icon}
        icon={faTimes}
        onClick={() => dispatch(deleteSubskillAction(sub.id))}
      />
    </li>
  ));
  return (
    <Container>
      {children.length > 0 ? <ul className={classes.ul}>{children}</ul> : <p>No subskill available</p>}
    </Container>
  );
};

export default SubSkill;
