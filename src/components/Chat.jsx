import React, { useContext } from "react";
// import Cam from "../img/cam.png";
// import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import UserAvatar from "./UserAvatar";

const Chat = () => {
  const { data } = useContext(ChatContext);
  console.log(data);
  // chatId: "cnTBB2yZsFWAMFdjk0Y9cbNw8KY25d0wnGigXTUTiSzA7hY1OogXBQ12"
  // user: displayName: "aarrrr"
        // uid: "cnTBB2yZsFWAMFdjk0Y9cbNw8KY2"
  return (
    <div className="chat">
      <div className="chatInfo">
      <div className="userDetails">
      <UserAvatar name={data.user.displayName} />
        <div>{data.user?.displayName}</div>
      </div>
        <div className="chatIcons">
          {/* <img src={Cam} alt="" /> */}
          {/* <img src={Add} alt="" /> */}
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
