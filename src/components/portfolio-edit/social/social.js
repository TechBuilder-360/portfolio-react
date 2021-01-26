import React, { useState, useEffect} from "react";
import style from "../profile-edit.module.css";
import classes from "../personal_info/personalInfo.module.css";
import Child from "./child";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import SocialForm from "./socialForm";
import { Accordion } from "react-bootstrap";

const Social = () => {
  const limit = process.env.REACT_APP_SOCIAL_LINKS_LIMIT
  const socialLinks = useSelector((state) => state.portfolio.social);

  const [form, setForm] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    if (formVisible) {
      setForm(<SocialForm closeForm={() => setFormVisible(false)} />);
    } else {
      setForm(null);
    }
  }, [formVisible]);

  // Populate accordion children with existing record
  const children = socialLinks.map((item, i) => (
    <Child
      label={item.label}
      link={item.url}
      id={item.id}
      closeForm={() => setFormVisible(false)}
      index={i + 1}
      key={i}
    />
  ));

  return (
    <div className={style.SubSection}>
      <p className="title">Social Contact</p>
      <hr />
      <Accordion className={classes.Accordion_Parent}>{children}</Accordion>
      {form}
      {socialLinks.length < limit ? 
      <span onClick={() => setFormVisible(true)}>
      <FontAwesomeIcon icon={faPlus} /> Add Social Contact
    </span>
      : null}
    </div>
  );
};


export default Social;
