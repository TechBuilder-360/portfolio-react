import React, { Component } from 'react';
import Container from '../../container/Container';
import { ProjectTitle } from "../../static";
import UserNavigation from '../Navigation/portfolio-navBar';
import PersonalInfo from './personal_info/personalInfo';
import classes from './profile-edit.module.css';
import Education from "./education/education";
import Experience from "./experience/Experience";
import Projects from "./projects/projects";
import Social from './social/social';
import Skill from './Skill/skill';
import { connect } from 'react-redux';
import { fetchPortfolio } from '../../store/actions/portfolioActions';

class Profile_Edit extends Component {
    
    componentWillMount(){
        document.title = `${ProjectTitle} Profile`;
        
        if(this.props.authUser != this.props.portfolioUser){
            this.props.fetch_portfolio(this.props.authUser)
        }
    }

    render() {
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
    }
    
}

const mapStateToProps = state => {
    return {
        authUser: state.auth.username,
        // portfolioUser: state.portfolio.personalInfo.username || null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetch_portfolio: (username) => dispatch(fetchPortfolio(username))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile_Edit);
