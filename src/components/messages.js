import React from "react";
import { connect } from "react-redux";

const messages = (props) => {
  const flash_messages = props.messages.map((msg) => {
    return <div style={{display: "block"}} class={`alert alert-${msg.type}`} role="alert">
      {msg.message}
    </div>;
  });

  return (<div></div>);
};

const mapStatesToProps = (state) => {
  return {
    messages: state.messages,
  };
};

export default connect(mapStatesToProps)(messages);
