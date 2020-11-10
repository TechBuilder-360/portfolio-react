import React from "react";
import Container from "../../container/Container";
import UserNavigation from "../Navigation/user_navigation";
import PersonalInfo from "./personal_info/personalInfo";
import classes from "./profile-edit.module.css";
import { connect } from "react-redux";

const Profile_Edit = (props) => {
  return (
    <Container>
      <UserNavigation />
      <div className={classes.Wrapper}>
        <section>
          <PersonalInfo
            firstName={props.personalInfo.first_name}
            lastName={props.personalInfo.last_name}
            middleName={props.personalInfo.middle_name}
            email={props.personalInfo.email}
            languages={props.personalInfo.languages}
            gender={props.personalInfo.gender}
            stateOfResidence={props.personalInfo.state_of_residence}
            profession={props.personalInfo.profession}
            dateOfBirth={props.personalInfo.date_of_birth}
            professionalSummary={props.personalInfo.bio}
          />
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
