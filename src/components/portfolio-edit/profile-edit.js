import React from "react";
import Container from "../../container/Container";
import UserNavigation from "../Navigation/user_navigation";
import Education from "./education/education";
import Experience from "./experience/Experience";
import PersonalInfo from "./personal_info/personalInfo";
import classes from "./profile-edit.module.css";

const profile_edit = () => {
  return (
    <Container>
      {/* Nav Bar */}
      <UserNavigation />
      {/* End Nav Bar */}
      {/* Body */}
      <div className={classes.Wrapper}>
        <section>
          <PersonalInfo Wrapper={classes.SubSection} />
          <Education Wrapper={classes.SubSection}/>
          <Experience Wrapper={classes.SubSection}/>
        </section>
      </div>
      {/*  End Body */}
    </Container>
  );
};

export default profile_edit;
