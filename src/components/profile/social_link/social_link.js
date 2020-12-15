import React from "react";
import { connect } from "react-redux";
import { SocialIcon } from "react-social-icons";
import Container from "../../../container/Container";
import classes from "./social_link.module.css";

const SocialLinks = (props) => {
  let socialTypeContent = null;

  const display = (social) => {
    switch (social.label.toLowerCase()) {
      case "twitter":
        socialTypeContent = (
          <div className={classes.container}>
            <div className={classes.icon}>
              <SocialIcon
                network={social.label.toLowerCase()}
                style={{ height: "25px", width: "25px" }}
                url={social.url}
              />
            </div>
          </div>
        );
        break;

      case "facebook":
        socialTypeContent = (
          <div className={classes.container}>
            <div className={classes.icon}>
              <SocialIcon
                network={social.label.toLowerCase()}
                style={{ height: "25px", width: "25px" }}
                url={social.url}
              />
            </div>
          </div>
        );
        break;

      default:
        socialTypeContent = null;
    }

    return socialTypeContent;
  };
  return (
    <Container>
      {props.social.map((social, index) => (
        <div className={classes.lo} key={index}>{display(social, index)}</div>
      ))}
    </Container>
  )
};

const mapStateToProps = (state) => {
  return {
    social: state.portfolio.social,
  };
};

export default connect(mapStateToProps)(SocialLinks);
