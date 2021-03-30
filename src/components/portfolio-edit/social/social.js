import React, { useState, useEffect} from "react";
import style from "../profile-edit.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import SocialForm from "./socialForm";
import { Collapse } from 'antd';

const Social = () => {
  const limit = process.env.REACT_APP_SOCIAL_LINKS_LIMIT
  const socialLinks = useSelector((state) => state.portfolio.social);
  const message = useSelector(state => state.portfolio.message)
  const { Panel } = Collapse;

  const [form, setForm] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    if (formVisible) {
      setForm(<SocialForm closeForm={() => setFormVisible(false)} />);
    } else {
      setForm(null);
    }
  }, [formVisible]);

  useEffect(() => {
    if(message) {
      setFormVisible(false);
    }
  }, [message]);
  
  // Populate accordion children with existing record
  const panels = socialLinks.map((item, i) => (
    <Panel
      header={item.label}
      showArrow={false}
      key={item.id}
    >
      <SocialForm link={item.url} label={item.label} id={item.id}/>
    </Panel>
  ));

  return (
    <div className={style.SubSection}>
      <p className="title">Social Contact</p>
      <hr />
      <Collapse accordion >
        {panels}
      </Collapse>
      <hr/>
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
