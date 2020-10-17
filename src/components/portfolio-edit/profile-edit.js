import React from 'react';
import Container from '../../container/Container';
import UserNavigation from '../Navigation/user_navigation';
import PersonalInfo from './personal_info/personalInfo';
import classes from './profile-edit.module.css'

const profile_edit = () => {
    return (
        <Container>
            <UserNavigation />
            <div className={classes.Wrapper}>
                <section>
                    <PersonalInfo/>
                </section>
            </div>
        </Container>
    );
};

export default profile_edit;