import { useEffect } from "react";
import { Footer, UserHeader } from "../components";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminLayout = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem("maternity-role") !== "admin") {
  //     toast.warning("Please Login");
  //     navigate("/login?role=admin");
  //   }
  // }, []);
  return (
    <>
      <div style={{ minHeight: "72vh" }}>
        <UserHeader role="Admin" />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default AdminLayout;
