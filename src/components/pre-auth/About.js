import React from 'react';
import Container from '../../container/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <Container>
            <p className='title'> About Us </p>
            <p>Techbuilder 360 is a community of developers, coming together to learn and build skills by 
                developing softwares that can be used to solve problems.</p>
            <h6>What to know more about us</h6>
            <p>
                <FontAwesomeIcon icon={faEnvelope} /> 
                <a target='blank' href="mailto:Tech.Builder.circle@gmail.com"> Tech.Builder.circle@gmail.com </a>
            </p>
        </Container>
    );
};

export default About;