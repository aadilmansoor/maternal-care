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
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import BookingStatus from "./pages/Client/BookingStatus/BookingStatus";
import Newsletter from "./pages/Admin/Newsletter/Newsletter";
import MarkAttendance from "./pages/Service_Provider/MarkAttendance/MarkAttendance";
import ServiceProviderInfo from "./components/ServiceProviderInfo/ServiceProviderInfo";
import ServiceProviders from "./pages/Admin/ServiceProviders/ServiceProviders";
import ChatPage from "./pages/Admin/ChatPage/ChatPage";

function App() {
  return (
    <div className="position-relative">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/client-register" element={<ClientRegister />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<ClientDashboard />} />
        <Route path="/service-provider" element={<ProviderDashboard />} />
        <Route path="/service-provider-register" element={<SpRegister />} />
        <Route path="/admin/leave-requests" element={<LeaveRequest />} />
        <Route path="/admin/bookings" element={<Bookings />} />
        <Route path="/admin/categories" element={<Categories />} />
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
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="/user/booking-status" element={<BookingStatus />} />
        <Route path="/admin/send-newsletter" element={<Newsletter />} />
        <Route
          path="/admin/service-provider-info"
          element={<ServiceProviderInfo />}
        />
        <Route path="/admin/chat" element={<ChatPage />} />

        <Route
          path="/service-provider/mark-attendance"
          element={<MarkAttendance />}
        />
        <Route path="/admin/service-providers" element={<ServiceProviders />} />
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
