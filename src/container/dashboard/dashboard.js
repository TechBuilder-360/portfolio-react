import React, { Component } from "react";
import classes from "./dashboard.module.css";
// import CoverImage from "../../components/profile/cover_Image/cover_image";
import PersonalInfo from "../../components/profile/personal_Info/personal_info";
import ProfessionalSummary from "../../components/profile/professional_summary/professional_summary";
import Education from "../../components/profile/education/education";
import Experience from "../../components/profile/experience/experience";
import Skills from "../../components/profile/skills/skills";
import Projects from "../../components/profile/projects/projects";
import SocialLinks from "../../components/profile/social_link/social_link";
import { ProjectTitle } from "../../static";
import DashboardNavBar from "../../components/Navigation/portfolio-navBar";
import Container from "../Container";

export default class Dashboard extends Component {
  componentDidMount() {
    document.title = `${ProjectTitle} Dashboard`;
  }
  render() {
    return (
      <Container>
        <DashboardNavBar />
        <div className={classes.Wrapper}>
          <aside className={classes.Aside}>
            <PersonalInfo />
          </aside>
          <main className={classes.Main}>
            {/* <CoverImage title="This is the cover image component" /> */}
            <ProfessionalSummary wrapper={classes.Main_Content} title="This is the professional info component" />
            <Education wrapper={classes.Main_Content} title="This is the education component" />
            <Experience wrapper={classes.Main_Content} title="This is the experience component" />
            <Skills wrapper={classes.Main_Content} title="Skills" />
            <Projects wrapper={classes.Main_Content} title="This is the project component" />
            <SocialLinks wrapper={classes.Main_Content} title="This is the social component" />
          </main>
        </div>
      </Container>
    );
  }
}
