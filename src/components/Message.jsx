import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
// import { ChatContext } from "../context/ChatContext";

const Message = ({ message, previousMessage }) => {
  const { currentUser } = useContext(AuthContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const formatTime = (timestamp) => {
    if (!timestamp) return "";
    const date = timestamp.toDate();
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div
      ref={ref}
      className={`message ${
        message.senderId === currentUser.uid ? "owner" : ""
      }`}
    >
      <div className="messageContent">
        <p>{message.text}</p>
      </div>
      <div className="messageInfo">
      <span style={{ fontSize: "12px", fontWeight: "500" }}>
            {formatTime(message.date)}
          </span>
      </div>
    </div>
  );
};

export default Message;
