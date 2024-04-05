import { Avatar } from "@mui/material";
import "./ChatPage.css";

const ChatPage = () => {
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
      <div className="chat_container poppins-regular">
        <div className="chat_profile">
          <div className="ps-3 py-3 poppins-bold box_heading text-white sticky-top">
            Complaint Box
          </div>
          {chatInfo()}
          {chatInfo()}
          {chatInfo()}
          {chatInfo()}
          {chatInfo()}
        </div>
        {/* <div className="message_box">
          <img src="/images/envelope.svg" alt="envelope" className="mb-2" />
          <p className="mb-2 poppins-regular">Select an item to read</p>
          <p className="text-secondary poppins-light">Nothing is selected</p>
        </div> */}
        <div className="message_container px-3">
          <div className="chat_info my-5">
            <div className="d-flex gap-2 justify-content-center align-items-center">
              <Avatar
                alt="profile"
                src="https://th.bing.com/th/id/OIP.DhcpZV93vm2K_TkGekCVFwHaHa?w=600&h=600&rs=1&pid=ImgDetMain"
                sx={{ width: 60, height: 60 }}
              />
              <div className="d-flex flex-column gap-2">
                <p className="poppins-semibold">Username</p>
                <p className="poppins-regular text-secondary">
                  email@email.com
                </p>
              </div>
            </div>
            <div className="d-flex flex-column gap-2 text-secondary">
              <p className="poppins-light">Date</p>
              <p className="poppins-light">Time</p>
            </div>
          </div>
          <div>
            <p className="poppins-semibold ms-3">SUBJECT: Subject</p>
          </div>
          <div className="message_content bg-white">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              ipsa ratione, vero ullam mollitia vel. Laudantium voluptatem
              ducimus facere autem inventore, maiores laborum omnis, eius
              maxime, minus ullam totam. Amet?Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Amet ipsa ratione, vero ullam
              mollitia vel. Laudantium voluptatem ducimus facere autem
              inventore, maiores laborum omnis, eius maxime, minus ullam totam.
              Amet?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Amet ipsa ratione, vero ullam mollitia vel. Laudantium voluptatem
              ducimus facere autem inventore, maiores laborum omnis, eius
              maxime, minus ullam totam. Amet?Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Amet ipsa ratione, vero ullam
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChatPage;
