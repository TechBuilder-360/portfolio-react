import React, { useState, useCallback, useEffect } from "react";
import style from "../profile-edit.module.css";
import classes from "../personal_info/personalInfo.module.css";
import Child from "./child";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
// import { useSelector, shallowEqual } from "react-redux";
import { connect } from "react-redux";
import SocialForm from "./socialForm";
import { Accordion } from "react-bootstrap";

const Social = (props) => {
  // const authState = useSelector((state) => state.porfolio, shallowEqual);

  const [form, setForm] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    if (formVisible) {
      setForm(<SocialForm closeForm={() => setFormVisible(false)} />);
    } else {
      setForm(null);
    }
  }, [formVisible]);

  let remove = (label, link) => {
    console.log("item to be removed", label, link);
    //Dispatch event to remove the parameter from redux
  };

  // Populate accordion children with existing record
  const children = props.socialLinks.map((item, i) => (
    <Child
      label={item.label}
      link={item.url}
      removeMore={remove}
      closeForm={() => setFormVisible(false)}
      i={i + 1}
      key={i}
    />
  ));

  return (
    <div className={style.SubSection}>
      <p className="title">Social Contact</p>
      <p className="sub-title">
        You can have up to {process.env.REACT_APP_SOCIAL_LINKS_LIMIT} social
        contact details
      </p>
      <hr />
      <Accordion className={classes.Accordion_Parent}>{children}</Accordion>
      {form}
      <span onClick={() => setFormVisible(true)}>
        <FontAwesomeIcon icon={faPlusCircle} size="lg" /> add more social
        contact
      </span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    socialLinks: state.social,
  };
};

export default connect(mapStateToProps)(Social);
