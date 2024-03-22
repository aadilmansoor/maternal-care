import { useEffect, useRef, useState } from "react";
import "./ChatBox.css";

const ChatBox = () => {
  const [showChatBox, setShowChatBox] = useState(false);

  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
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
          <div className="admin_chat">
            <p>
              <div className="admin_title">Admin</div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
              doloremque possimus explicabo, eveniet, accusamus animi soluta
              optio eum commodi sunt, delectus nobis voluptatibus. Eius dolor,
              expedita repudiandae amet eaque animi.
            </p>
          </div>
          <div className="user_chat">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
              doloremque possimus explicabo, eveniet, accusamus animi soluta
              optio eum commodi sunt, delectus nobis voluptatibus. Eius dolor,
              expedita repudiandae amet eaque animi.
            </p>
          </div>
          <div className="user_chat">
            <p>Hi</p>
          </div>
          <div className="admin_chat">
            <p>
              <div className="admin_title">Admin</div>
              Hello
            </p>
          </div>
          <div className="admin_chat">
            <p>
              <div className="admin_title">Admin</div>
              Lorem ipsum, dolor sit amet consectetur.
            </p>
          </div>
          <AlwaysScrollToBottom />
        </div>
        <div className="chat_input">
          <input type="text" placeholder="Message" />
          <div className="sent_icon">
            <i className="fa-regular fa-paper-plane"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatBox;
