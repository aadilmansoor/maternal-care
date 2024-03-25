import { Route, Routes } from "react-router-dom";
import "./App.css";

import {
  Login,
  Home,
  ClientRegister,
  ClientDashboard,
  AdminDashboard,
  ProviderDashboard,
  SpRegister,
  LeaveRequest,
  Bookings,
  Categories,
  ClientBooking,
} from "./pages";

import { Footer } from "./components";
import ProviderVerification from "./pages/Admin/ProviderVerification/ProviderVerification";
import { ToastContainer } from "react-toastify";
import ProviderLeaveRequest from "./pages/Service_Provider/ProviderLeaveRequest/ProviderLeaveRequest";
import Attendance from "./pages/Service_Provider/Attendance/Attendance";
import Complaint from "./pages/Client/ClientComplaint/Complaint";
import ServiceProviderDetails from "./pages/Client/ServiceProviderDetails/ServiceProviderDetails";
import Newsletter from "./pages/Admin/Newsletter/Newsletter";

function App() {
  return (
    <div className="position-relative">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/client-register" element={<ClientRegister />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<ClientDashboard />} />
        <Route
          path="/care-provider-dashboard"
          element={<ProviderDashboard />}
        />
        <Route path="/service-provider-register" element={<SpRegister />} />
        <Route path="/leave-request" element={<LeaveRequest />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/admin/verification" element={<ProviderVerification />} />
        <Route path="/user/bookings" element={<ClientBooking />} />
        <Route
          path="/service-provider/leave-request"
          element={<ProviderLeaveRequest />}
        />
        <Route path="/service-provider/attendance" element={<Attendance />} />
        <Route path="/user/complaints" element={<Complaint />} />
        <Route
          path="/user/service-provider-details"
          element={<ServiceProviderDetails />}
        />
        <Route path="/admin/send-newsletter" element={<Newsletter />} />
      </Routes>
      <ToastContainer
        autoClose={2000}
        theme="colored"
        position="bottom-right"
      />
      <Footer />
    </div>
  );
}

export default App;
