import { Avatar, Badge } from "@mui/material";
import "./AdminChatBox.css";
import { useEffect, useRef, useState } from "react";
import {
  getAllMessagesAPI,
  getMessageByAdminAPI,
  sentMessageByAdminAPI,
} from "../../../Services/allAPI";

const AdminChatBox = () => {
  const [userList, setUserList] = useState([]);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const getAllMessages = async () => {
    const result = await getAllMessagesAPI();
    if (result.status === 200) {
      const message = result.data.chatPost.map((user) => {
        let lastMessage = "";
        if (user.message.at(-1).userMessage.message) {
          lastMessage = user.message.at(-1)?.userMessage.message;
        } else {
          lastMessage = user.message.at(-1).adminMessage.message;
        }
        return {
          user,
          unreadMessages: user.userUnreadcount,
          lastMessage,
        };
      });
      setUserList(message);
    }
  };
  useEffect(() => {
    getAllMessages();
  }, []);

  const AlwaysScrollToBottom = () => {
    const elementRef = useRef(null);
    useEffect(
      () =>
        elementRef.current.scrollIntoView({ behavior: "smooth", block: "end" }),
      []
    );
    return <div ref={elementRef} />;
  };

  const handleUserClick = async (userId) => {
    const result = await getMessageByAdminAPI({ userId });
    if (result.status === 200) {
      setMessages(result.data.chatPost);
    }
  };

  const handleSubmit = async () => {
    if (!text) {
      return;
    }
    const result = await sentMessageByAdminAPI({
      userId: messages.userId,
      text,
    });
    if (result.status === 200) {
      handleUserClick(messages.userId);
      getAllMessages();
      setText("");
    }
  };

  const handleEnter = async (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <div className="chat_container_admin poppins-regular">
        <div
          className={`chat_profile_admin ${
            messages.length === 0 ? "" : "hide_content"
          }`}
        >
          <div className="ps-3 py-3 poppins-bold box_heading text-white sticky-top">
            Chat Box
          </div>
          {userList.map((message) => {
            return (
              <section
                key={message.user._id}
                onClick={() => handleUserClick(message.user.userId)}
              >
                <div className="chat_info w-100">
                  <div className="d-flex gap-2 justify-content-center align-items-center">
                    <Avatar
                      alt="profile"
                      src="https://th.bing.com/th/id/OIP.DhcpZV93vm2K_TkGekCVFwHaHa?w=600&h=600&rs=1&pid=ImgDetMain"
                      sx={{ width: 50, height: 50 }}
                    />
                    <div className="d-flex flex-column gap-2">
                      <p className="poppins-semibold text-capitalize">
                        {message.user.username}
                      </p>
                      <p className="poppins-regular text-muted">
                        {message.lastMessage}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-2 text-secondary justify-content-center">
                    <Badge
                      badgeContent={message.user.userUnreadcount}
                      color="primary"
                      sx={{ position: "relative" }}
                    ></Badge>
                  </div>
                </div>
                <hr />
              </section>
            );
          })}
        </div>
        {messages.length === 0 ? (
          <div className="message_box_admin hide_content">
            <img src="/images/envelope.svg" alt="envelope" className="mb-2" />
            <p className="mb-2 poppins-regular">Select an item to read</p>
            <p className="text-secondary poppins-light">Nothing is selected</p>
          </div>
        ) : (
          <div className={`message_container_admin`}>
            <div className="admin_chat_container">
              <div className="chat_body_admin poppins-regular">
                <i
                  className="fa-solid fa-arrow-left fa-2x ms-3 mt-2 mb-2 back_arrow"
                  onClick={() => setMessages([])}
                ></i>
                {messages?.message?.map((text) => {
                  if (!text.userMessage.message) {
                    return (
                      <div className="user_chat_admin">
                        <p>{text.adminMessage.message}</p>
                      </div>
                    );
                  } else {
                    return (
                      <div className="admin_chat_admin">
                        <p>
                          <div className="admin_title text-capitalize">
                            {messages.username}
                          </div>
                          {text.userMessage.message}
                        </p>
                      </div>
                    );
                  }
                })}
                <AlwaysScrollToBottom />
              </div>
              <div className="chat_input_admin">
                <input
                  type="text"
                  placeholder="Message"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={handleEnter}
                />
                <div className="sent_icon_admin" onClick={handleSubmit}>
                  <i className="fa-regular fa-paper-plane"></i>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default AdminChatBox;
