import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import classes from './pre-auth.module.css'
import Layout from '../../container/Layout/Layout';

const About = () => {
    return (
        <Layout>
            <p className="title">About Us</p>
            <p>TechBuilder 360 is a team of young and talented individuals 
                who share a common vision in learning and development of the world technology.
                The team harnesses the luxury and efficiency of remote-work culture in building
                applications ranging from web to mobile with the aim of giving the team members
                the feel and experience of working on production worthy applications.
            </p>
            <p>The team is opened to anyone from:</p>
            <ul>
                <li>Web Development</li>
                <li>Mobile Development</li>
                <li>UI/UX/Product Design</li>
                <li>DevOps</li>
                <li>Digital Marketers/Promoters</li>
            </ul>
            <p className="title">Our Vision</p>
            <p>To build a community of developers that would build a better future.</p>
            <br/>
            <p className="title">WANT TO JOIN US?</p>
            <p>Send your Request to our Email highlighting your point of interest.</p>
            <p>
                <FontAwesomeIcon icon={faEnvelope} /> 
                <a target='blank' href="mailto:Tech.Builder.circle@gmail.com" className={classes.Link}> Tech.Builder.circle@gmail.com </a>
            </p>
        </Layout>
    );
};

export default About;