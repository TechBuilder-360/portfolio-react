import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./dashboard.module.css";
import PersonalInfo from "../../components/profile/personal_Info/personal_info";
import ProfessionalSummary from "../../components/profile/professional_summary/professional_summary";
import Education from "../../components/profile/education/education";
import Experience from "../../components/profile/experience/experience";
import Skills from "../../components/profile/skills/skills";
import Projects from "../../components/profile/projects/projects";
import SocialLinks from "../../components/profile/social_link/social_link";
import { ProjectTitle } from "../../static";
import DashboardNavBar from "../../components/Navigation/portfolio-navBar";
import Footer from "../../components/Footer/Footer";
import { fetchPortfolio } from "../../store/actions/portfolioActions";
import Wrapper from "../../container/Container";
import SpinnerElement from "../../components/spinner/spinner";
import NotFound from '../../components/Special Page/NotFound'

const Dashboard = () => {
  const { username } = useParams();
  const portfolio = useSelector(
    (state) => state.portfolio.personalInfo,
    shallowEqual
  );
  const authState = useSelector((state) => state.auth.loading, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `${ProjectTitle} Dashboard`;
    if(portfolio){
      if (username != portfolio.username)
        dispatch(fetchPortfolio(username));
    }
  }, []);

  const dashboard = (
    <Wrapper>
      <Col sm="12" md="3" className={classes.Aside}>
        <PersonalInfo />

        <SocialLinks />
        <br />
        <button className={classes.Butt}>Download Resume</button>
      </Col>

      <Col sm="12" md="9" className={classes.Main}>
        <ProfessionalSummary
          div={classes.div}
          wrapper={classes.Main_Content}
          title="Professional Summary"
        />
        <Education
          timeline={classes.timeline}
          wrapper={classes.Main_Content}
          title="Education"
        />
        <Experience
          timeline={classes.timeline}
          wrapper={classes.Main_Content}
          title="Experience"
        />
        <Skills
          div={classes.div}
          wrapper={classes.Main_Content}
          title="Skills"
        />
        <Projects
          div={classes.div}
          wrapper={classes.Main_Content}
          title="Project"
        />
      </Col>
      <Footer />
    </Wrapper>
  );

  const loading = (
    <SpinnerElement />
  );

  return (
    <Container fluid>
      <DashboardNavBar />
      <Row>
        {portfolio ? (authState ? loading : dashboard): <NotFound/>}</Row>
    </Container>
  );
};

export default Dashboard;
