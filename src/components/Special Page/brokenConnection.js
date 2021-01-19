import React from "react";
import { Result, Button } from "antd";
import { Container } from "react-bootstrap";

const BrokenConnection = () => {
  return (
    <Container>
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={<Button type="primary" onClick={()=>window.history.go(-2)}>Back</Button>}
      />
    </Container>
  );
};

export default BrokenConnection;