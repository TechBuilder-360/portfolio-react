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
      <Image className={classes.Img} src={props.url || defaultImage} />
      <Button
        onClick={handleClick}
        variant="success"
        size="sm"
        style={{ marginLeft: "10px", backgroundColor: "#196DB6" }}
      >
        Upload Photo
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
