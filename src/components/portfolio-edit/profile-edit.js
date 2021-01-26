import React, { useEffect } from "react";
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
import Configurations from "./configuration/configuration"
import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolio } from "../../store/actions/portfolioActions";
import SpinnerElement from "../spinner/spinner";
import Footer from "../Footer/Footer";
import BrokenConnection from '../Special Page/brokenConnection'
import Accomplishment from "./accomplishment/accomplishment";


const Profile_Edit = () => {
  
  const dispatch = useDispatch();
  const portfolio = useSelector( state => state.portfolio);
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    document.title = `${ProjectTitle} Profile`;
    
    if(portfolio.personalInfo){
      if (auth.username !== portfolio.personalInfo.username)
        dispatch(fetchPortfolio(auth.username));
    } else dispatch(fetchPortfolio(auth.username));
  },[]);  // eslint-disable-line react-hooks/exhaustive-deps

  let children = <SpinnerElement />;

  if (!auth.loading && portfolio.personalInfo && auth.username === portfolio.personalInfo.username) {
    children = (
      <section>
        <PersonalInfo />
        <Accomplishment/>
        <Social />
        <Education />
        <Experience />
        <Skill />
        <Projects />
        <Configurations />
      </section>
    );
  } else if(portfolio.redirect){
    children = <BrokenConnection/>
  }

  return (
    <Container>
      {/* Nav Bar */}
      <UserNavigation />
      {/* End Nav Bar */}

      {/* Body */}
      <div className={classes.Wrapper}>{children}</div>
      {/* End Body */}

      {/* Footer */}
      {(auth.loading || portfolio.redirect) ? null : <Footer />}
      {/* End Footer */}
    </Container>
  );
};

export default Profile_Edit;
