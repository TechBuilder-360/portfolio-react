import React, {useState, useEffect} from "react";
import { Button, Image } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";
import Container from "../../../../container/Container";
import defaultImage from "../../../../images/avatar.webp";
import classes from "../personalInfo.module.css";
import { avatar } from "../../../../store/actions/portfolioActions";

const PortfolioImage = (props) => {
  const dispatch = useDispatch();

  const hiddenFileInput = React.useRef(null);

  // const message = useSelector(state => state.portfolio.message)
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
        setLoading(false);
    }
  });

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setLoading(true);
    dispatch(avatar(fileUploaded));
  };


  return (
    <Container>
      <Image className={classes.Img} src={props.url || defaultImage} />
      <Button
        onClick={handleClick}
        variant="success"
        size="sm"
        disabled={isLoading}
        style={{ marginLeft: "10px", backgroundColor: "#196DB6" }}
      >
        {isLoading ? "Uploading Photo..." : "Upload Photo"}
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

export default connect(mapStatesToProps)(PortfolioImage);
