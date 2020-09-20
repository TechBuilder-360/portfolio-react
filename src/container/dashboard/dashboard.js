import React, { Component } from 'react'
import classes from './dashboard.module.css'
import CoverImage from '../../components/profile/cover_Image/cover_image'
import PersonalInfo from '../../components/profile/personal_Info/personal_info'
import ProfessionalInfo from '../../components/profile/professional_info/professional_info'
import Education from '../../components/profile/education/education'
import Experience from '../../components/profile/experience/experience'
import Skills from '../../components/profile/skills/skills'
import Projects from '../../components/profile/projects/projects'
import SocialLinks from '../../components/profile/social_link/social_link'


export default class dashboard extends Component {
    render() {
        return (
            <main className={classes.main}>
                <CoverImage title="This is the cover image component"/>
                <PersonalInfo title="This is the personal info component"/>
                <ProfessionalInfo title="This is the professional info component"/>
                <Education title="This is theeducation component"/>
                <Experience title="This is the experience component"/>
                <Skills title="This is the skills info component"/>
                <Projects title="This is the project component"/>
                <SocialLinks title="This is the social component"/>
            </main>
        )
    }
}
