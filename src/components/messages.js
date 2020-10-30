import React from "react";
import { connect } from "react-redux";
import FlashMessage from "react-flash-message";

const messages = (props) => {
  const flash_messages = props.messages.map((msg) => {
    return <div style={{display: "block"}} class={`alert alert-${msg.type}`} role="alert">
      {msg.message}
    </div>;
  });

  return (
  <FlashMessage duration={5000}>
    {flash_messages}{flash_messages}
  </FlashMessage>);
};

const mapStatesToProps = (state) => {
  return {
    messages: state.messages,
  };
};

export default connect(mapStatesToProps)(messages);
