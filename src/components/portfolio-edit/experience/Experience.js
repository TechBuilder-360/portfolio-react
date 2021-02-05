import React, { useEffect, useState } from "react";
import style from "../profile-edit.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import ExperienceForm from "./ExperienceForm";
import { Collapse } from "antd";

const Experience = (props) => {
  const limit = process.env.REACT_APP_EXPERIENCE_LIMIT;
  const [form, setForm] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const experience = useSelector((state) => state.portfolio.experience);
  const { Panel } = Collapse;

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  useEffect(() => {
    if (formVisible) {
      setForm(
        <ExperienceForm experience={{}} closeForm={() => handleCloseForm()} />
      );
    } else {
      setForm(null);
    }
  }, [formVisible]);

  // Populate accordion children with existing record
  const panels = experience.map((exp, i) => {
    const label = `${exp.position} at ${exp.organization} from ${exp.startYear} to ${exp.endYear}`;
    return (
      <Panel header={label} showArrow={false} key={exp.id}>
        <ExperienceForm experience={exp} />
      </Panel>
    );
  });

  return (
    <div className={style.SubSection}>
      <p className="title">Experience</p>
      <hr />
      <Collapse accordion>{panels}</Collapse>
      <hr/>
      {form}
      {experience.length < limit ? (
        <span style={{ marginTop: "2%" }} onClick={() => setFormVisible(true)}>
          <FontAwesomeIcon icon={faPlus} /> Add Experience
        </span>
      ) : null}
    </div>
  );
};

export default Experience;
