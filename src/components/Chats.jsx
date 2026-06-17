import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import UserAvatar from "./UserAvatar";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    let unsub;
    const getChats = () => {
      unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data() || {});
      });
    };
    if (currentUser?.uid) {
      getChats();
    }
    return () => {
      if (unsub) {
        unsub(); 
      }
    };
  }, [currentUser?.uid]);


  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="chats">
      {Object.entries(chats || {})
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          chat[1]?.userInfo && (
            <div
              className="userChat"
              key={chat[0]}
              onClick={() => handleSelect(chat[1].userInfo)}
            >
              <UserAvatar 
                name={chat[1].userInfo?.displayName} 
                isOnline={true}
              />
              <div className="userChatInfo">
                <span>{chat[1].userInfo?.displayName}</span> 
                <p>
                  {/* Check if text exists and is longer than 20 chars */}
                  {chat[1].lastMessage?.text?.length > 20 
                    ? chat[1].lastMessage.text.substring(0, 60) + "..." 
                    : chat[1].lastMessage?.text}
                </p>
              </div>
            </div>
          )
        ))}
    </div>
  );

};

export default Chats;
