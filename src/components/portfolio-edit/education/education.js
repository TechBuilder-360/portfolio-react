import React, { useState} from "react";
import style from "../profile-edit.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Child from "./components/child";


const Education = () => {
  const [numchild, setNumchild] = useState(0);
  const children = [];

  let addMore =() => {
    setNumchild(numchild + 1)
  }

  function removeMore(index){
    const list = [...children];
    list.splice(index, 1);
    setNumchild(list.length);
  }

  for (var i = 0; i < numchild; i += 1) {
    children.push(<Child removeMore={removeMore} index={i}/>);
  }

  return (
    <div className={style.SubSection}>
      <p className="title">Education</p>
      <hr />
      {children}
        <span onClick={addMore}>
  <FontAwesomeIcon icon={faPlusCircle} size="lg"/>{" "}add more Education
        </span>
      </div>
  )
}
export default Education;
