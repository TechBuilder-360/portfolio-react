import React from 'react';
import Container from '../../container/Container';
import UserNavigation from '../Navigation/portfolio-navBar';
import PersonalInfo from './personal_info/personalInfo';
import classes from './profile-edit.module.css';
import Education from "./education/education";
import Experience from "./experience/Experience";
import Projects from "./projects/projects";
import Social from './social/social';
import Skill from './Skill/skill';


const Profile_Edit = (props) => {
    return (
        <Container>
            {/* Nav Bar */}
            <UserNavigation />
            {/* End Nav Bar */}
            {/* Body */}
            <div className={classes.Wrapper}>
                <section>
                    <PersonalInfo/>
                    <Social/>
                    <Education/>
                    <Experience/>
                    <Skill />
                    <Projects/>
                </section>
            </div>
        </Container>
    );
};
  
  export default Profile_Edit;
