import React, { useState, useCallback, useEffect } from "react";
import style from "../profile-edit.module.css";
import classes from "../personal_info/personalInfo.module.css";
import Child from "./child";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Button, Col } from "react-bootstrap";
// import { useSelector, shallowEqual } from "react-redux";
import { connect } from "react-redux";

const Social = (props) => {
  // const authState = useSelector((state) => state.porfolio, shallowEqual);
  let userLinks = props.socialLinks;
  const [numchild, setNumchild] = useState(0);
  const [sLinks, setsLinks] = useState([]); 

  // let children = [];
  // useEffect(() => {
  //   children = userLinks.map((item, index) => (
  //     <Child
  //       label={item.label}
  //       link={item.url}
  //       remove={remove}
  //       key={index}
  //       id={index}
  //     />
  //   ));
  //   console.log(children);
  //   setsLinks(children);
  //   setNumchild(children.length);
  // }, [props.socialLinks]);

  let remove = useCallback((index) => {
    // let newList = sLinks.filter((item) => item.props.id !== index);
    // setsLinks(newList);
    // setNumchild(numchild - 1);
    console.log('test vic', index, sLinks.length, sLinks)
    let even = [];
    for(var i = 0; i < sLinks.length; i++) {
      
      console.log('test bool', i,)
      if (sLinks[i].props.id != index) even.push(sLinks[i]);
    }
    setsLinks(even);

    // console.log('test', even)
  }, [sLinks]);

  let addMore = () => {
    if (numchild <= process.env.REACT_APP_SOCIAL_LINKS_LIMIT) {
      let newItem = <Child remove={remove} key={Math.random()} id={Math.random()} />;
      setsLinks([...sLinks, newItem]);
      setNumchild(numchild + 1);
    }
  };
  
  console.log("comps", sLinks);
  return (
    <div className={style.SubSection}>
      <p className="title">Social Contact</p>
      <hr />
      <p className="sub-title">
        You can have up to {process.env.REACT_APP_SOCIAL_LINKS_LIMIT} social
        contact details
      </p>
      <Col md={12}>
        {sLinks}
        <div style={{ marginTop: "30px" }}>
          {numchild}
          {numchild >= process.env.REACT_APP_SOCIAL_LINKS_LIMIT ? null : (
            <span onClick={addMore}>
              <FontAwesomeIcon icon={faPlusCircle} size="lg" /> add more social
              contact
            </span>
          )}
          <Button
            style={{ float: "right" }}
            type="submit"
            className={classes.Mb_5}
          >
            Save
          </Button>
        </div>
      </Col>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    socialLinks: state.social,
  };
};

export default connect(mapStateToProps)(Social);
