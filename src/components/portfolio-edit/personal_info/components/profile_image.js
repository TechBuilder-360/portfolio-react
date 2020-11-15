import React from "react";
import { Button, Image } from "react-bootstrap";
import { connect } from "react-redux";
import Container from "../../../../container/Container";
import avatar from "../../../../images/avatar.webp";
import classes from "../personalInfo.module.css";
import * as action from "../../../../store/actions/portfolioActions"


const Images = (props) => {

const hiddenFileInput = React.useRef(null);

const handleClick = event => {
  hiddenFileInput.current.click();
};

const handleChange = event => {
  const fileUploaded = event.target.files[0];
  props.handleFile(fileUploaded);
};


  return (
    <Container>
      <Image className={classes.Img} src={props.avatar ? props.avatar: avatar} rounded />
      <Button onClick={handleClick} variant="success" style={{marginLeft: "10px"}}>Upload</Button>

      <input
        type="file"
        id="fileId"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}}
      />
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    avatar: state.personal_info.profile_pix
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleFile: (photo) => dispatch(action.avatar(photo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Images);
