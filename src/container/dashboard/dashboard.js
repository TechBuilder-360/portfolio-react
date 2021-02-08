import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Col, Container, Row, Dropdown } from "react-bootstrap";
import classes from "./dashboard.module.css";
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
import NotFound from "../../components/Special Page/Error404";
import BrokenConnection from "../../components/Special Page/brokenConnection";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";
import { message } from "antd";
import { CopyOutlined, DownloadOutlined } from "@ant-design/icons";

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

  const copyUserLink = () => {
    navigator.clipboard.writeText(window.location.toString());
    message.success("Link copied to clipboard!", 2);
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

          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              More
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {portfolio.allowDownload ? (
                <Dropdown.Item
                  onClick={() => handleDownload(portfolio.lastName)}
                >
                  <DownloadOutlined />{" "}
                  <span style={{ paddingLeft: "10px" }}>Download Resume</span>
                </Dropdown.Item>
              ) : null}
              <Dropdown.Item onClick={() => copyUserLink()}>
                <CopyOutlined />{" "}
                <span style={{ paddingLeft: "10px" }}>Copy Link</span>
              </Dropdown.Item>
              {username === auth.username ? (
                <>
                  <Dropdown.Divider />
                  <Dropdown.Header>Share</Dropdown.Header>
                  <Dropdown.Item>
                    <>
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
                    </>
                  </Dropdown.Item>
                </>
              ) : null}
            </Dropdown.Menu>
          </Dropdown>
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
