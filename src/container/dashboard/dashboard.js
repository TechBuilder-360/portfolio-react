import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./dashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import PersonalInfo from "../../components/profile/personal_Info/personal_info";
import ProfessionalSummary from "../../components/profile/professional_summary/professional_summary";
import Education from "../../components/profile/education/education";
import Experience from "../../components/profile/experience/experience";
import Skills from "../../components/profile/skills/skills";
import Projects from "../../components/profile/projects/projects";
import SocialLinks from "../../components/profile/social_link/social_link";
import { ProjectTitle, ShareButton } from "../../static";
import DashboardNavBar from "../../components/Navigation/portfolio-navBar";
import {
  fetchPortfolio,
  downloadResume,
} from "../../store/actions/portfolioActions";
import Wrapper from "../../container/Container";
import SpinnerElement from "../../components/spinner/spinner";
import NotFound from "../../components/Special Page/NotFound";
import BrokenConnection from "../../components/Special Page/brokenConnection";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";

const Dashboard = () => {
  const { username } = useParams();
  const portfolio = useSelector(
    (state) => state.portfolio.personalInfo,
    shallowEqual
  );
  const redirect = useSelector((state) => state.portfolio.redirect);
  const auth = useSelector((state) => state.auth, shallowEqual);
  const dispatch = useDispatch();

  let children = null;

  useEffect(() => {
    document.title = `${ProjectTitle} Dashboard`;
    if (portfolio) {
      if (username !== portfolio.username) dispatch(fetchPortfolio(username));
    } else {
      dispatch(fetchPortfolio(username));
    }
  }, [dispatch, portfolio, username]);

  const handleDownload = (last_name) => {
    dispatch(downloadResume(username, last_name));
  };

  if (auth.loading) {
    children = <SpinnerElement />;
  } else if (portfolio) {
    children = (
      <Wrapper>
        <Col sm="12" md="3" className={classes.Aside}>
          <PersonalInfo isOwner={username === auth.username} />
          <SocialLinks />
          <br />
          <button
            onClick={() => handleDownload(portfolio.lastName)}
            className={classes.Butt}
          >
            Download Resume <FontAwesomeIcon icon={faDownload} />
          </button>
          {username === auth.username ? (
            <div className={classes.Share}>
              Share{" "}
              <TwitterShareButton
                title={ShareButton.title}
                url={ShareButton.url}
              >
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
              <FacebookShareButton
                title={ShareButton.title}
                url={ShareButton.url}
              >
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
            </div>
          ) : null}
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
      </Wrapper>
    );
  } else if (redirect) {
    children = <BrokenConnection />;
  } else {
    children = <NotFound />;
  }

  return (
    <Container fluid>
      <DashboardNavBar />
      <Row>{children}</Row>
    </Container>
  );
};

export default Dashboard;
