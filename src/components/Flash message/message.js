import React from "react";
import { notification, Button } from 'antd'

const Message = () => {

  return (
    <div>
      {notification.error({
        message: "Ooch!",
        description: (
          <div>
            An error Occured!
            <br />
            Try again or reload page.
            <br />
            <br />
            <Button onClick={() => window.location.reload()} size="sm">
              Reload
            </Button>
          </div>
        ),
        closeIcon: true,
        className: "custom-class",
        placement: "topRight",
        duration: 5,
      })}
    </div>
  );
};

export default Message;
