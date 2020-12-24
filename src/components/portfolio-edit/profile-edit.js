import React, { Component } from "react";
import Container from "../../container/Container";
import { ProjectTitle } from "../../static";
import UserNavigation from "../Navigation/portfolio-navBar";
import PersonalInfo from "./personal_info/personalInfo";
import classes from "./profile-edit.module.css";
import Education from "./education/education";
import Experience from "./experience/Experience";
import Projects from "./projects/projects";
import Social from "./social/social";
import Skill from "./Skill/skill";
import { connect } from "react-redux";
import { fetchPortfolio } from "../../store/actions/portfolioActions";
import SpinnerElement from "../spinner/spinner";
import Footer from "../Footer/Footer";


class Profile_Edit extends Component {
  UNSAFE_componentWillMount() {
    document.title = `${ProjectTitle} Profile`;

    if (this.props.auth.username !== this.props.portfolioUser) {
      this.props.fetch_portfolio(this.props.auth.username);
    }
  }

  render() {
    
    var children = (
      <SpinnerElement />
    );

    if(!this.props.auth.loading){
        children = (
            <section>
            <PersonalInfo />
            <Social />
            <Education />
            <Experience />
            <Skill />
            <Projects />
          </section>
        )
    }
    return (
      <Container>
        {/* Nav Bar */}
        <UserNavigation />
        {/* End Nav Bar */}

        {/* Body */}
        <div className={classes.Wrapper}>
          {children}
        </div>
        {/* End Body */}

        {/* Footer */}
        {this.props.auth.loading ? null : <Footer/>}
        {/* End Footer */}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    portfolioUser: state.portfolio.personalInfo.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_portfolio: (username) => dispatch(fetchPortfolio(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile_Edit);
