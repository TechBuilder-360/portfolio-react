import React, { useState, useCallback } from "react";
import style from "../profile-edit.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Child from "./Child";

const Projects = (props) => {
  const [numchild, setNumchild] = useState(0);
  const children = [];

  let addMore = useCallback(() => {
    setNumchild(numchild + 1);
  });

  let removeMore = useCallback((index) => {
    const list = [...children];
    list.splice(index, 1);
    setNumchild(list.length);
  });

  for (var i = 0; i < numchild; i += 1) {
    children.push(<Child removeMore={removeMore} key={i} number={i} />);
  }
  return (
    <div className={style.SubSection}>
      <p className="title">Projects</p>
      <hr />
      {children}
      <span onClick={addMore}>
        <FontAwesomeIcon icon={faPlusCircle} size="lg" /> add more Projects
      </span>
    </div>
  );
};

export default Projects;
