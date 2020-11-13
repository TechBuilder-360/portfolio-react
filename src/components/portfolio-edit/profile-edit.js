import React from "react";
import Container from "../../container/Container";
import UserNavigation from "../Navigation/user_navigation";
import PersonalInfo from "./personal_info/personalInfo";
import classes from "./profile-edit.module.css";
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
    personalInfo: state.portfolio.personal_info,
    personalSkills: state.portfolio.skills,
    personalExperience: state.portfolio.experience,
    personalProject: state.portfolio.project,
    personalSocial: state.portfolio.social,
    personalEducation: state.portfolio.education,
  };
};

export default connect(mapStateToProps)(Profile_Edit);
