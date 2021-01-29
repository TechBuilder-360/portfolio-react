import React from "react";
import { connect } from "react-redux";
import { SocialIcon } from "react-social-icons";
import Container from "../../../container/Container";
import classes from "./social_link.module.css";

const SocialLinks = (props) => {
  return (
    <Container>
      {props.social.map((social, index) => (
        <Container key={index}>
          <div className={classes.lo}>
            <div className={classes.container}>
              <div className={classes.icon} title={social.label}>
                <SocialIcon
                  network={social.label.toLowerCase()}
                  style={{ height: "25px", width: "25px" }}
                  url={social.url}
                  bgColor={social.label.toLowerCase()==='github'? "#00000" :null}
                />
              </div>
            </div>
          </div>
        </Container>
      ))}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    social: state.portfolio.social,
  };
};

export default connect(mapStateToProps)(SocialLinks);
