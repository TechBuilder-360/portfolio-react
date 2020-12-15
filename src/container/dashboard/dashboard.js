import React, { useEffect } from "react";
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

// import { useParams } from "react-router-dom"
import { useSelector, shallowEqual } from "react-redux";
import { Button, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  // const { username } = useParams();
  const authState = useSelector((state) => state.auth, shallowEqual);
  // let history = useHistory();

  useEffect(() => {
    document.title = `${ProjectTitle} Dashboard`;
    // Confirm if username (from url) exists before loading page. if it doesn't, redirect to 404 page
    // if (username!='') {
    //   history.push("/pageNotFound");
    // }
      
      // if(this.props.authUser != this.props.portfolioUser){
      //     this.props.fetch_portfolio(this.props.authUser)
      // }
  }, [authState.username]);

  return (
    <Container>
      <DashboardNavBar />

      <Row className={classes.Wrapper}>
        <Col md="3" className={classes.Aside}>
            <PersonalInfo />

            <SocialLinks />

            <Button variant="danger">
              <NavLink style={{ color: "white" }} to={"/logout"}>
                <FontAwesomeIcon icon={faPowerOff} /> Logout
              </NavLink>
            </Button>
            <br />
            <button className={classes.Butt}>
              Download Resume
            </button>
        </Col>

        <Col md="9" className={classes.Main}>
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
      </Row>
    </Container>
  );
};

export default Dashboard;
