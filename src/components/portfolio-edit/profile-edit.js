import React from 'react';
import Container from '../../container/Container';
import UserNavigation from '../Navigation/user_navigation';
import PersonalInfo from './personal_info/personalInfo';
import classes from './profile-edit.module.css';
import { connect } from "react-redux";
import Education from "./education/education";
import Experience from "./experience/Experience";
import Projects from "./projects/projects";


const Profile_Edit = (props) => {
    return (
        <Container>
            {/* Nav Bar */}
            <UserNavigation />
            {/* End Nav Bar */}
            {/* Body */}
            <div className={classes.Wrapper}>
                <section>
                    <PersonalInfo data={props.personalInfo}/>
                    <Education/>
                    <Experience/>
                    <Projects/>
                </section>
            </div>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        personalInfo : state.personal_info,
        personalSkills : state.skills,
        personalExperience: state.experience,
        personalProject : state.project,
        personalSocial: state.social,
        personalEducation: state.education,
    };
  };
  
  export default connect(mapStateToProps)(Profile_Edit);
