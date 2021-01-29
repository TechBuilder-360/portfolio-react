import React, { useEffect, useState } from "react";
import style from "../profile-edit.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import AccompForm from "./components/accompForm";
import { Collapse } from 'antd';

const Accomplishment = () => {
  const limit = process.env.REACT_APP_ACCOMPLISHMENT_LIMIT;
  const [form, setForm] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const accomplishment = useSelector(state => state.portfolio.accomplishment);
  const { Panel } = Collapse;

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
  const panels = accomplishment.map((acc, i) => (
    <Panel
      header={`${acc.course} at ${acc.issuer}`}
      showArrow={false}
      key={acc.id}
    >
      <AccompForm accomplishment={acc} />
    </Panel>
  ));

  return (
    <div className={style.SubSection}>
      <p className="title">Accomplishment</p>
      <hr />
      <Collapse accordion >
        {panels}
      </Collapse>
      <hr />
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