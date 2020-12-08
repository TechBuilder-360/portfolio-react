import React from 'react';
import { Container } from 'react-bootstrap';

const SubSkill = ({skill}) => {

    const children = skill.map((sub, i) => 
        (<li key={i}> {sub.name} </li>)
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