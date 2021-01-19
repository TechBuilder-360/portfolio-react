import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMessages } from "../../store/actions/portfolioActions";
import { message, Button } from 'antd';

const Message = () => {
  const msg = useSelector((state) => state.portfolio.message);
  const dispatch = useDispatch()
  const timout = 10

  useEffect(()=>{
    if(msg.messages.length > 0){
      setTimeout(()=>{
        dispatch(clearMessages())
        clearTimeout()
      },timout*1000)
    }
  },[dispatch, msg])

  const success = () => {
    {msg.messages.map(m => (
      message.success(m, 10)
    ))}
  };
  
  const error = () => {
    {msg.messages.map(m => (
      message.error(m, 10)
    ))}
  };

  return <div>{msg.alert === "success"? success(): error()}</div>
};

export default Message;
