import React, { useEffect } from "react";
import { Alert, Container } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { clearError } from "../store/actions/auth";

const Message = () => {
  // const dispatch = useDispatch();
  // const messages = useSelector((state) => state.auth.error);
  // useEffect(() => {
  //   setTimeout(() => {
  //     // dispatch(clearError());
  //     clearTimeout();
  //   }, 10000);
  // },[]);

  const alert = null
  // messages.map((msg, index) => (
  //   <Alert key={index} variant={"danger"}>
  //     {msg}
  //   </Alert>
  // ));

  return <Container fluid>{alert}</Container>;
};

export default Message;
