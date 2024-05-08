import { useEffect, useRef, useState } from "react";
import "./ChatBox.css";
import {
  getMessageByUserAPI,
  receiveMessageAPI,
  sentMessageUserAPI,
} from "../../Services/allAPI";
import { useUserContext } from "../../context/UserContext";
import { Badge } from "@mui/material";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const [unreadCount, setUnreadCount] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const [showChatBox, setShowChatBox] = useState(false);

  const { user } = useUserContext();

  const getMessages = async () => {
    const userId = localStorage.getItem("userId");
    const result = await getMessageByUserAPI({ userId });
    if (result.status === 200) {
      setUnreadCount(result.data.chatGet.adminUnreadcount);
      // setAllMessages(result.data.chatPost);
    }
  };

  useEffect(() => {
    setInterval(() => {
      getMessages();
    }, 1000);
  }, []);

  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };

  const handleSubmit = async () => {
    if (!message) {
      return;
    }
    const userId = localStorage.getItem("userId");
    const result = await sentMessageUserAPI({
      userId,
      username: user.username,
      text: message,
    });
    if (result.status === 200) {
      getMessages();
      setMessage("");
      handleShowChatBox();
    }
  };

  const handleEnter = async (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleShowChatBox = async () => {
    setShowChatBox(true);
    const userId = localStorage.getItem("userId");
    const result = await receiveMessageAPI({ userId });
    if (result.status === 200) {
      setAllMessages(result.data.chatPost);
    }
  };

  const handleHideChatBox = () => {
    setShowChatBox(false);
  };

  return (
    <div>
      <span
        className={`message_icon ${
          showChatBox ? "d-none" : ""
        } position-fixed bottom-0 end-0 mb-3 me-3`}
        onClick={handleShowChatBox}
      >
        <Badge badgeContent={unreadCount} color="warning">
          <span>
            <i className="fa-regular fa-message"></i>
          </span>
        </Badge>
      </span>
      <div
        className={`chat_box ${
          showChatBox ? "show" : ""
        } position-fixed bottom-0 end-0`}
      >
        <div className="chat_header position-relative ">
          <p className="text-center text-white poppins-semibold">
            Chat with Admin
          </p>
          <span
            className="position-absolute end-0 top-0 text-white close_btn mt-2 me-3"
            onClick={handleHideChatBox}
          >
            <i className="fa-solid fa-xmark"></i>
          </span>
        </div>
        <div className="chat_body poppins-regular">
          {allMessages?.message?.map((message, index) => {
            if (!message.userMessage.message) {
              return (
                <div className="admin_chat" key={index}>
                  <p>
                    <span className="admin_title">Admin</span>
                    <br />
                    {message.adminMessage.message}
                  </p>
                </div>
              );
            } else {
              return (
                <div className="user_chat" key={index}>
                  <p>{message.userMessage.message}</p>
                </div>
              );
            }
          })}
          <AlwaysScrollToBottom />
        </div>
        <div className="chat_input">
          <input
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleEnter}
          />
          <div className="sent_icon" onClick={handleSubmit}>
            <i className="fa-regular fa-paper-plane"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatBox;
