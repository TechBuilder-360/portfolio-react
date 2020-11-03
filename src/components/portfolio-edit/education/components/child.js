import React, { useState, useCallback } from "react";
import classes from "../../personal_info/personalInfo.module.css";
import SubEducation from "./educationForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const Child = (props) => {
  const [show, setShow] = useState(true);

  let toggleDisplay = useCallback(() => {
    setShow(!show);
  });
  return (
    <div className={classes.container}>
      <div className={classes.drop}>
        <div>
          {show ? (
            <div>
              <div onClick={toggleDisplay}>
                Show institution name (2008-2012)
                <div style={{ float: "right" }}>
                  <FontAwesomeIcon icon={faAngleUp} />
                </div>
              </div>
              <SubEducation submithandler={props.submithandler} />
            </div>
          ) : (
            <div onClick={toggleDisplay}>
              Show institution name (2008-2012)
              <div style={{ float: "right" }}>
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
          )}
        </div>
      </div>
      <FontAwesomeIcon
        className={classes.delete}
        onClick={props.removeMore}
        icon={faTrash}
      />
    </div>
  );
};
export default Child;
