import React from 'react';
import Container from '../../container/Container';
import UserNavigation from '../Navigation/user_navigation';
import PersonalInfo from './personal_info/personalInfo';
import classes from './profile-edit.module.css';
import { connect } from "react-redux";


    // state_of_residence: "Lagos",
    // nationality: "Nigeria",
    // date_of_birth: "12th, December",
    // profession: "Accountant",
    // profile_pix: "",


const Profile_Edit = (props) => {
    console.log(props.personalInfo)
    console.log(props.personalInfo.username)
    return (
        <Container>
            <UserNavigation />
            <div className={classes.Wrapper}>
                <section>
                    <PersonalInfo 
                        firstName={props.personalInfo.first_name} lastName={props.personalInfo.last_name} 
                        middleName={props.personalInfo.middle_name} email={props.personalInfo.email}
                        languages={props.personalInfo.languages} gender={props.personalInfo.gender}
                        stateOfResidence={props.personalInfo.state_of_residence}
                        profession={props.personalInfo.profession} gender={props.personalInfo.gender}
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
        personalInfo : state.personal_info,
        personalSkills : state.skills,
        personalExperience: state.experience,
        personalProject : state.project,
        personalSocial: state.social,
        personalEducation: state.education,
    };
  };
  
  export default connect(mapStateToProps)(Profile_Edit);