import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import ClientRegister from "./pages/Client/ClientRegister";
import AdminDashBoard from "./pages/Admin/Admindashboard/AdminDashBoard";
import SpRegister from "./pages/Service_Provider/SpRegister";
import LeaveRequest from "./pages/Admin/LeaveRequest/LeaveRequest";
import Bookings from "./pages/Admin/Bookings/Bookings";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/client-register" element={<ClientRegister />} />
        <Route path="/admin-dashboard" element={<AdminDashBoard />} />
        <Route path="/service-provider-register" element={<SpRegister />} />
        <Route path="/leave-request" element={<LeaveRequest />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
