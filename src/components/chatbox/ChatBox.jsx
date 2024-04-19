import { useEffect, useRef, useState } from "react";
import "./ChatBox.css";
import { receiveMessageAPI, sentMessageUser } from "../../Services/allAPI";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const [showChatBox, setShowChatBox] = useState(false);
  console.log(allMessages);

  useEffect(() => {
    const getMessages = async () => {
      const userID = localStorage.getItem("userId");
      const result = await receiveMessageAPI({ userID });
      setAllMessages(result.data.user);
    };
    getMessages();
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
    const userID = localStorage.getItem("userId");
    const result = await sentMessageUser({ userID, message });
    if (result.status === 200) {
      const newMessage = { user_message: message, _id: message };
      setAllMessages((currentMessages) => [...currentMessages, newMessage]);
      setMessage("");
    }
  };

  const handleEnter = async (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div>
      <span
        className={`message_icon ${
          showChatBox ? "d-none" : ""
        } position-fixed bottom-0 end-0 mb-3 me-3`}
        onClick={() => setShowChatBox(true)}
      >
        <i className="fa-regular fa-message"></i>
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
            onClick={() => setShowChatBox(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </span>
        </div>
        <div className="chat_body poppins-regular">
          {allMessages.map((message) => {
            if (!message.user_message) {
              return (
                <div className="admin_chat" key={message._id}>
                  <p>
                    <span className="admin_title">Admin</span>
                    <br />
                    {message.admin_message}
                  </p>
                </div>
              );
            } else {
              return (
                <div className="user_chat" key={message._id}>
                  <p>{message.user_message}</p>
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
