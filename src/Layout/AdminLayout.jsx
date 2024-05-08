import { Footer, UserHeader } from "../components";
import { Outlet } from "react-router-dom";

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
      <div style={{ minHeight: "77vh" }}>
        <UserHeader role="Admin" />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default AdminLayout;
