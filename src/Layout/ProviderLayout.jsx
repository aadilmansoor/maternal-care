import React, { useEffect } from "react";
import { Footer, UserHeader } from "../components";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProviderLayout = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   console.log(!localStorage.getItem("maternity-token"));
  //   console.log(localStorage.getItem("maternity-role") !== "provider");
  //   if (
  //     !localStorage.getItem("maternity-token") ||
  //     localStorage.getItem("maternity-role") !== "provider"
  //   ) {
  //     toast.warning("Please Login");
  //     navigate("/login?role=provider");
  //   }
  // }, []);
  return (
    <>
      <div style={{ minHeight: "72vh" }}>
        <UserHeader role="provider" />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default ProviderLayout;
