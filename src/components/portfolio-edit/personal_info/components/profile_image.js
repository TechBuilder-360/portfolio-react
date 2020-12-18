import React from "react";
import { Button, Image } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import Container from "../../../../container/Container";
import defaultImage from "../../../../images/avatar.webp";
import classes from "../personalInfo.module.css";
import { avatar } from "../../../../store/actions/portfolioActions";

const Images = (props) => {
  const dispatch = useDispatch();

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    dispatch(avatar(fileUploaded));
    
  };


  return (
    <Container>
      <Image className={classes.Img} src={props.url || defaultImage} rounded />
      <Button
        onClick={handleClick}
        variant="success"
        style={{ marginLeft: "10px" }}
      >
        Upload
      </Button>

      <input
        type="file"
        id="fileId"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </Container>
  );
};

const mapStatesToProps = (state) => {
  return {
    url: state.portfolio.personalInfo.profilePix,
  };
};

export default connect(mapStatesToProps)(Images);
