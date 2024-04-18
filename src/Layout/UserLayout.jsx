import React, { useEffect } from "react";
import { Footer, UserHeader } from "../components";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserLayout = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (
  //     !localStorage.getItem("maternity-token") ||
  //     localStorage.getItem("maternity-role") !== "user"
  //   ) {
  //     toast.warning("Please Login");
  //     navigate("/login");
  //   }
  // }, []);
  return (
    <>
      <div style={{ minHeight: "72vh" }}>
        <UserHeader />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default UserLayout;
