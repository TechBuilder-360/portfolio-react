import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import classes from './pre-auth.module.css'

const About = () => {
    return (
        <div>
            <p className='title'> About Us </p>
            <p>Techbuilder 360 is a community of developers, coming together to learn and build skills by 
                developing softwares that can be used to solve problems.</p>
            <h5>What to know more about us</h5>
            <p>
                <FontAwesomeIcon icon={faEnvelope} /> 
                <a target='blank' href="mailto:Tech.Builder.circle@gmail.com" className={classes.Link}> Tech.Builder.circle@gmail.com </a>
            </p>
        </div>
    );
};

export default About;