import { Avatar } from "@mui/material";
import "./AdminChatBox.css";
import { useEffect, useRef } from "react";

const AdminChatBox = () => {
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };
  function chatInfo() {
    return (
      <>
        <div className="chat_info">
          <div className="d-flex gap-2 justify-content-center align-items-center">
            <Avatar
              alt="profile"
              src="https://th.bing.com/th/id/OIP.DhcpZV93vm2K_TkGekCVFwHaHa?w=600&h=600&rs=1&pid=ImgDetMain"
              sx={{ width: 50, height: 50 }}
            />
            <div className="d-flex flex-column gap-2">
              <p className="poppins-semibold">Username</p>
              <p className="poppins-regular">Subject</p>
            </div>
          </div>
          <div className="d-flex flex-column gap-2 text-secondary">
            <p className="poppins-light">Date</p>
            <p className="poppins-light">Time</p>
          </div>
        </div>
        <hr />
      </>
    );
  }

  return (
    <>
      <div className="chat_container_admin poppins-regular">
        <div className="chat_profile_admin">
          <div className="ps-3 py-3 poppins-bold box_heading text-white sticky-top">
            Chat Box
          </div>
          {chatInfo()}
          {chatInfo()}
          {chatInfo()}
          {chatInfo()}
          {chatInfo()}
        </div>
        <div className="message_container_admin">
          <div className="admin_chat_container">
            <div className="chat_body_admin poppins-regular">
              <div className="admin_chat_admin">
                <p>
                  <div className="admin_title">Admin</div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                  doloremque possimus explicabo, eveniet, accusamus animi soluta
                  optio eum commodi sunt, delectus nobis voluptatibus. Eius
                  dolor, expedita repudiandae amet eaque animi.
                </p>
              </div>
              <div className="user_chat_admin">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                  doloremque possimus explicabo, eveniet, accusamus animi soluta
                  optio eum commodi sunt, delectus nobis voluptatibus. Eius
                  dolor, expedita repudiandae amet eaque animi.
                </p>
              </div>
              <div className="user_chat_admin">
                <p>Hi</p>
              </div>
              <div className="admin_chat_admin">
                <p>
                  <div className="admin_title">Admin</div>
                  Hello
                </p>
              </div>
              <div className="admin_chat_admin">
                <p>
                  <div className="admin_title">Admin</div>
                  Lorem ipsum, dolor sit amet consectetur.
                </p>
              </div>
              <AlwaysScrollToBottom />
            </div>
            <div className="chat_input_admin">
              <input type="text" placeholder="Message" />
              <div className="sent_icon_admin">
                <i className="fa-regular fa-paper-plane"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminChatBox;
