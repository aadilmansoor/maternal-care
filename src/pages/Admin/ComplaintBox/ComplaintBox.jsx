import { Avatar } from "@mui/material";
import "./ComplaintBox.css";
import { useEffect, useState } from "react";
import { getComplaintsAPI } from "../../../Services/allAPI";
import { formatDate_ddmmyy, formatTime } from "../../../utils";

const ComplaintPage = () => {
  const [allComplaints, setAllComplaints] = useState([]);
  const [complaint, setComplaint] = useState([]);
  console.log({ complaint });
  useEffect(() => {
    const getComplaints = async () => {
      const result = await getComplaintsAPI();
      if (result.status === 200) {
        setAllComplaints(result?.data?.response);
      }
    };
    getComplaints();
  }, []);

  const handleUserClick = (id) => {
    setComplaint(allComplaints.filter((complaint) => complaint._id === id));
  };

  return (
    <>
      <div className="chat_container poppins-regular">
        {console.log(complaint.length === 0)}
        <div
          className={`chat_profile ${
            complaint.length === 0 ? "" : "hide_content"
          }`}
        >
          <div className="ps-3 py-3 poppins-bold box_heading text-white sticky-top">
            Complaint Box
          </div>
          {allComplaints.map((complaint) => {
            return (
              <section
                key={complaint._id}
                onClick={() => handleUserClick(complaint._id)}
              >
                <div className="chat_info">
                  <div className="d-flex gap-2 justify-content-center align-items-center">
                    <Avatar
                      alt="profile"
                      src="https://th.bing.com/th/id/OIP.DhcpZV93vm2K_TkGekCVFwHaHa?w=600&h=600&rs=1&pid=ImgDetMain"
                      sx={{ width: 50, height: 50 }}
                    />
                    <div className="d-flex flex-column gap-2">
                      <p className="poppins-semibold text-capitalize">
                        {complaint.name}
                      </p>
                      <p className="poppins-regular">{complaint.subject}</p>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-2 text-secondary">
                    <p className="poppins-light">
                      {formatDate_ddmmyy(complaint.createdAt)}
                    </p>
                    <p className="poppins-light text-end">
                      {formatTime(complaint.createdAt)}
                    </p>
                  </div>
                </div>
                <hr />
              </section>
            );
          })}
        </div>
        {complaint.length > 0 ? (
          <div className="message_container px-3">
            <i
              className="fa-solid fa-arrow-left fa-2x ms-3 mt-2 mb-2 back_arrow"
              onClick={() => setComplaint([])}
            ></i>
            <div className="chat_info mb-5">
              <div className="d-flex gap-2 justify-content-center align-items-center">
                <Avatar
                  alt="profile"
                  src="https://th.bing.com/th/id/OIP.DhcpZV93vm2K_TkGekCVFwHaHa?w=600&h=600&rs=1&pid=ImgDetMain"
                  sx={{ width: 60, height: 60 }}
                />
                <div className="d-flex flex-column gap-2">
                  <p className="poppins-semibold text-capitalize">
                    {complaint[0]?.name}
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column gap-2 ">
                <p className="poppins-light">
                  {formatDate_ddmmyy(complaint[0]?.createdAt)}
                </p>
                <p className="poppins-light text-end">
                  {formatTime(complaint[0]?.createdAt)}
                </p>
              </div>
            </div>
            <div>
              <p className="poppins-semibold ms-3">
                SUBJECT: {complaint[0]?.subject}
              </p>
            </div>
            <div className="message_content bg-white">
              <p>{complaint[0]?.reason}</p>
            </div>
          </div>
        ) : (
          <div className="message_box hide_content">
            <img src="/images/envelope.svg" alt="envelope" className="mb-2" />
            <p className="mb-2 poppins-regular">Select an item to read</p>
            <p className="text-secondary poppins-light">Nothing is selected</p>
          </div>
        )}
      </div>
    </>
  );
};
export default ComplaintPage;
