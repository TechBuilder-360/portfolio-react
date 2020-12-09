import React, { useState, useEffect } from "react";
import style from "../profile-edit.module.css";
import classes from "../personal_info/personalInfo.module.css";
import Child from "./child";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import SocialForm from "./socialForm";
import { Accordion } from "react-bootstrap";
import {deleteSocialLink} from "../../../store/actions/portfolioActions";

const Social = () => {
  const dispatch = useDispatch();
  const socialLinks = useSelector((state) => state.portfolio.social, shallowEqual);

  const [form, setForm] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    if (formVisible) {
      setForm(<SocialForm closeForm={() => setFormVisible(false)} />);
    } else {
      setForm(null);
    }
  }, [formVisible]);

  let remove = (id) => {
    dispatch(deleteSocialLink(id))
  };

  // Populate accordion children with existing record
  const children = socialLinks.map((item, i) => (
    <Child
      label={item.label}
      link={item.url}
      id={item.id}
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
      {socialLinks.length < 3 ? 
      <span onClick={() => setFormVisible(true)}>
      <FontAwesomeIcon icon={faPlusCircle} size="lg" /> add more social
      contact
    </span>
      : null}
    </div>
  );
};


export default Social;
