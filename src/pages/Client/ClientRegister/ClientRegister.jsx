import React, { useState } from "react";
import "./ClientRegister.css";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerAPI } from "../../../Services/allAPI";
import { useNavigate } from "react-router-dom";

function ClientRegister() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userPhoneNumber: "",
    userAddress: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    const { userName, userEmail, userPassword, userPhoneNumber, userAddress } =
      userDetails;
    if (
      !userName ||
      !userEmail ||
      !userPassword ||
      !userPhoneNumber ||
      !userAddress
    ) {
      toast.warning("Please Fill the Form Completely..!!");
    } else {
      try {
        const result = await registerAPI(userDetails);
        if (result.status === 200) {
          toast.success("Registration Successful");
          navigate("/");
          return;
        }
        if (
          result.response.data.code === 11000 &&
          result.response.data.keyPattern &&
          result.response.data.keyPattern.userEmail
        ) {
          toast.warning("Email already exists!");
        } else {
          toast.error("Oops! Something went wrong.");
        }
      } catch (error) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <>
      <div className="client_div" style={{ width: "100%", height: "100vh" }}>
        <Row>
          <Col md={7}></Col>
          <Col
            md={5}
            className="mt-3 d-flex justify-content-center align-items-center flex-column"
          >
            <div className="register_div mt-5 d-flex justify-content-center align-items-center flex-column">
              <h3 className="text-white">Client Registration</h3>
              <input
                type="text"
                value={userDetails.userName}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, userName: e.target.value });
                }}
                placeholder="Username"
                style={{ borderRadius: "50px" }}
                className="form-control mb-3 w-50 mt-5"
              />
              <input
                value={userDetails.userEmail}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, userEmail: e.target.value });
                }}
                type="email"
                placeholder="Email Address"
                style={{ borderRadius: "50px" }}
                className="form-control mb-3 w-50 mt-2"
              />
              <input
                value={userDetails.userPassword}
                onChange={(e) => {
                  setUserDetails({
                    ...userDetails,
                    userPassword: e.target.value,
                  });
                }}
                type="password"
                placeholder="Password"
                style={{ borderRadius: "50px" }}
                className="form-control mb-3 w-50 mt-2"
              />
              <input
                value={userDetails.userPhoneNumber}
                onChange={(e) => {
                  setUserDetails({
                    ...userDetails,
                    userPhoneNumber: e.target.value,
                  });
                }}
                type="tel"
                placeholder="Phone Number"
                style={{ borderRadius: "50px" }}
                className="form-control mb-3 w-50 mt-2"
              />
              <textarea
                value={userDetails.userAddress}
                onChange={(e) => {
                  setUserDetails({
                    ...userDetails,
                    userAddress: e.target.value,
                  });
                }}
                className="rounded form-control w-50"
                style={{ borderRadius: "50px" }}
                placeholder="Address"
                cols="5"
                rows="5"
              ></textarea>
              <button
                className="w-50 mt-3 btn btn-danger"
                onClick={handleRegister}
                style={{ borderRadius: "50px" }}
              >
                REGISTER
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ClientRegister;
