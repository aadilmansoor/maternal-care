import React from "react";
import "./Login.css";
import { Col, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import google from "../../Images/google2.png";
import { useLocation } from "react-router-dom";

function Login() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const role = searchParams.get("role");
  return (
    <>
      <Row>
        <div className="login_page" style={{ width: "100%" }}>
          <Row className="mt-5">
            <Col lg={1} className="p-0"></Col>
            <Col
              lg={10}
              className="mt-5 d-flex justify-content-center align-items-center p-0"
            >
              <div
                className={`shadow rounded login_body ${
                  role === "admin" ? "w-75" : ""
                }`}
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  padding: "20px",
                }}
              >
                <Row>
                  <Col
                    lg={6}
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    <h2
                      className="mt-4 righteous-regular"
                      style={{ color: "white", textAlign: "center" }}
                    >
                      {role === "admin" ? (
                        <>
                          WELCOME
                          <br />
                          ADMIN
                        </>
                      ) : role === "provider" ? (
                        <>
                          WELCOME
                          <br />
                          SERVICE PROVIDER
                        </>
                      ) : (
                        <>
                          HELLO
                          <br />
                          WELCOME!
                        </>
                      )}
                    </h2>
                    <img
                      src="https://media.istockphoto.com/id/1341609914/vector/pregnant-couple-background-vector-illustration-with-a-husband-takes-care-and-hugs-his-wife.jpg?s=612x612&w=0&k=20&c=IZ7k7IktzY_x61KybAj2yBioHTLk6r86jafhB3ExN0E="
                      style={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",
                        margin: "20px 0",
                      }}
                      alt="getstarted"
                    />
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Officiis, dignissimos amet hic sed iusto illum similique
                      sit, animi quam
                    </p>
                  </Col>

                  <Col lg={6} className="mt-4">
                    <div
                      className="rounded"
                      style={{ backgroundColor: "white", padding: "20px" }}
                    >
                      <h4
                        
                        style={{ color: "blueviolet", textAlign: "center" }}
                      >
                        Login Your Account
                      </h4>
                      <div className="d-flex justify-content-center align-items-center">
                        <TextField
                          className="w-75 "
                          id="standard-basic"
                          type="email"
                          label="Email"
                          variant="standard"
                        />
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <TextField
                          className="w-75 "
                          id="standard-basic"
                          type="password"
                          label="Password"
                          variant="standard"
                        />
                      </div>
                      <div className="d-flex justify-content-center  gap-3 flex-wrap mt-3 ">
                      <div className="">
                        <input
                          className="me-2"
                          style={{ width: "20px", height: "20px" }}
                          type="checkbox"
                        />
                        
                        <label htmlFor="remember" className="">
                          Remember?
                        </label>
                        </div>
                        <a href="/forgot-password" className="">
                          Forgot password?
                        </a>
                        
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <button className="btn login_button rounded w-75 mt-4">
                          Login
                        </button>
                      </div>
                      <div
                        className={`d-flex justify-content-center align-items-center mt-3 ${
                          role === "admin" ? "d-none" : ""
                        }`}
                      >
                        <p>or connect with google</p>
                      </div>
                      <div
                        className={`d-flex justify-content-center align-items-center ${
                          role === "admin" ? "d-none" : ""
                        }`}
                      >
                        <div
                          className="google d-flex justify-content-evenly rounded"
                          style={{
                            width: "75%",
                            height: "50px",
                            backgroundColor: "#db4437",
                            color: "white",
                            cursor: "pointer",
                          }}
                        >
                          <img
                            className="ms-2 mt-2"
                            src={google}
                            style={{ width: "25px", height: "25px" }}
                            alt="google"
                          />
                          <h6 className="mt-2">Sign in with Google</h6>
                          
                        </div>
                      </div>
                      <div className="d-flex justify-content-center gap-4 flex-wrap mt-3">
                        <a href="/login?role=admin" >
                          Login as Admin
                        </a>
                        <a href="/service-login" >
                          Login as Service Provider
                        </a>
                        </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={1} className="p-0"></Col>
          </Row>
        </div>
      </Row>
    </>
  );
}

export default Login;
