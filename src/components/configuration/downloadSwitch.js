import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import ToggleSwitch from "../ToggleSwitch/toggleSwitch";
import { useSelector, useDispatch } from "react-redux";
import { allowDownload } from "../../store/actions/portfolioActions";

const DownloadSwitch = () => {
  const dispatch = useDispatch();
  const downloadState = useSelector(
    (state) => state.portfolio.personalInfo.allowDownload
  );
  const [download, setDownload] = useState(downloadState);
  const onChange = (newValue) => {
    dispatch(allowDownload(newValue));
    setDownload(newValue);
  };

  return (
    <Row>
      <Col sm={6} md={8} style={{textAlign: "justify"}}>
        <table className="table table-borderless">
          <tbody>
            <tr>
              <td style={{width: "30%"}}> Allow Download </td>
              <td>
                <ToggleSwitch
                  id="toggleSwitch"
                  checked={download}
                  onChange={onChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </Col>
    </Row>
  );
};

export default DownloadSwitch;
