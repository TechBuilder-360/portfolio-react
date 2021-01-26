import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import ToggleSwitch from "../ToggleSwitch/toggleSwitch";
import { useSelector, useDispatch } from "react-redux";
import { allowDownload } from '../../store/actions/portfolioActions'

const DownloadSwitch = () => {

  const dispatch = useDispatch()
  const downloadState = useSelector(
    (state) => state.portfolio.personalInfo.allowDownload
  );
  const [download, setDownload] = useState(downloadState);
  const onChange = (newValue) => {
    dispatch(allowDownload(newValue))
    setDownload(newValue);
  };

  return (
    <Row>
      <Col sm={6}>
        Show Download Button
      </Col>
      <Col sm={6}>
        <div className="float-right">
          <ToggleSwitch
            id="toggleSwitch"
            checked={download}
            onChange={onChange}
          />
        </div>
      </Col>
    </Row>
  );
};

export default DownloadSwitch;
