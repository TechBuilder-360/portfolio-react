import React, { useEffect, useState } from "react";
import style from "../profile-edit.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Accordion } from "react-bootstrap";
import Child from "./components/child";
import { useSelector } from "react-redux";
import classes from "../personal_info/personalInfo.module.css";
import AccompForm from "./components/accompForm";

const Accomplishment = () => {
  const limit = process.env.REACT_APP_ACCOMPLISHMENT_LIMIT;
  const [form, setForm] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const accomplishment = useSelector(state => state.portfolio.accomplishment)

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  useEffect(() => {
    if (formVisible) {
      setForm(
        <AccompForm accomplishment={{}} closeForm={() => handleCloseForm()} />
      );
    } else {
      setForm(null);
    }
  }, [formVisible]);

  // Populate accordion children with existing record
  const children = accomplishment.map((acc, i) => (
    <Child
    accomplishment={acc}
      closeForm={() => setFormVisible(false)}
      index={i + 1}
      key={i}
    />
  ));

  return (
    <div className={style.SubSection}>
      <p className="title">Accomplishment</p>
      <hr />
      <Accordion className={classes.Accordion_Parent}>{children}</Accordion>
      {form}
      {accomplishment.length < limit ? (
        <span style={{ marginTop: "2%" }} onClick={() => setFormVisible(true)}>
          <FontAwesomeIcon icon={faPlus} /> Add Accomplishment
        </span>
      ) : null}
    </div>
  );
};

export default Accomplishment;