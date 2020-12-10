
import React from 'react';
import { Container } from 'react-bootstrap';
import classes from "../../personal_info/personalInfo.module.css";
import { faTimes,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { delete_subskill } from '../../../../store/actions/portfolioActions';
import { useDispatch } from "react-redux"



const SubSkill = ({skill,...props}) => {
    const dispatch = useDispatch()

    const children = skill.map((sub, i) => 
        (<li className={classes.li} key={i}> {sub.name} 
        <FontAwesomeIcon size="lg" className={classes.icon} icon={faTimes}

onClick={() => dispatch(delete_subskill(props.index,sub.id))}
        
        /> </li>)
    )
    return (
        <Container>
            <ul>
                {children}
            </ul>
        </Container>
    );
};

export default SubSkill;