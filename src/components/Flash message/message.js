import React, { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearMessages } from "../../store/actions/portfolioActions";
import FlashMessage from "react-flash-message";
import Container from "../../container/Container";

const Message = () => {
  const msg = useSelector((state) => state.portfolio.message);
  const dispatch = useDispatch()
  let children = null;
  const timout = 10000

  useEffect(()=>{

    if(msg.messages.length > 0){
      setTimeout(()=>{
        dispatch(clearMessages())
        clearTimeout()
      },timout)
    }
  },[dispatch, msg])

    children = (
      <FlashMessage duration={timout}>
        <Alert
          style={{
            position: "fixed",
            zIndex: "20",
            width: "80%",
            marginLeft: "10%",
          }}
          variant={msg.alert}
        >
          {msg.messages.map((m, i) => (
            <div key={i}>{m}</div>
          ))}
        </Alert>
      </FlashMessage>
    );
  return <Container>{children}</Container>;
};

export default Message;
