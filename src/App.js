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

import ProviderVerification from "./pages/Admin/ProviderVerification/ProviderVerification";
import { ToastContainer } from "react-toastify";
import ProviderLeaveRequest from "./pages/Service_Provider/ProviderLeaveRequest/ProviderLeaveRequest";
import Attendance from "./pages/Service_Provider/Attendance/Attendance";
import Complaint from "./pages/Client/ClientComplaint/Complaint";
import ServiceProviderDetails from "./pages/Client/ServiceProviderDetails/ServiceProviderDetails";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import BookingStatus from "./pages/Client/BookingStatus/BookingStatus";
import Webinar from "./pages/Client/Webinar/Webinar";
import Newsletter from "./pages/Admin/Newsletter/Newsletter";
import MarkAttendance from "./pages/Service_Provider/MarkAttendance/MarkAttendance";
import ServiceProviderInfo from "./components/ServiceProviderInfo/ServiceProviderInfo";
import ServiceProviders from "./pages/Admin/ServiceProviders/ServiceProviders";
import ChatPage from "./pages/Admin/ChatPage/ChatPage";
import SpBookings from "./pages/Service_Provider/ServiceProviderBookings/SpBookings";
import UserLayout from "./Layout/UserLayout";
import AdminLayout from "./Layout/AdminLayout";
import ProviderLayout from "./Layout/ProviderLayout";
import AdminWebinar from "./pages/Admin/Webinar/Webinar";
import AddBlog from "./pages/Admin/Blog/Blog";

function App() {
  return (
    <div className="position-relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ForgotPassword />} />

        {/* admin */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/leave-requests" element={<LeaveRequest />} />
          <Route path="/admin/bookings" element={<Bookings />} />
          <Route path="/admin/categories" element={<Categories />} />
          <Route
            path="/admin/verification"
            element={<ProviderVerification />}
          />
          <Route path="/admin/send-newsletter" element={<Newsletter />} />
          <Route path="/admin/webinar" element={<AdminWebinar />} />
          <Route path="/admin/blog" element={<AddBlog />} />

          <Route
            path="/admin/service-provider-info"
            element={<ServiceProviderInfo />}
          />
          <Route path="/admin/complaint-box" element={<ChatPage />} />
          <Route
            path="/admin/service-providers"
            element={<ServiceProviders />}
          />
        </Route>

        {/* service provider */}
        <Route path="/service-provider-register" element={<SpRegister />} />
        <Route element={<ProviderLayout />}>
          <Route path="/service-provider" element={<ProviderDashboard />} />
          <Route
            path="/service-provider/leave-request"
            element={<ProviderLeaveRequest />}
          />
          <Route path="/service-provider/attendance" element={<Attendance />} />
          <Route
            path="/service-provider/mark-attendance"
            element={<MarkAttendance />}
          />
          <Route path="/service-provider/bookings" element={<SpBookings />} />
        </Route>

        {/* client */}
        <Route path="/client-register" element={<ClientRegister />} />
        <Route element={<UserLayout />}>
          <Route path="/user" element={<ClientDashboard />} />
          <Route path="/user/booking" element={<ClientBooking />} />
          <Route path="/user/booking-status" element={<BookingStatus />} />
          <Route path="/user/complaints" element={<Complaint />} />
          <Route path="/user/webinar" element={<Webinar />} />
          <Route
            path="/user/service-providers"
            element={<ServiceProviders />}
          />

          <Route
            path="/user/service-provider-details"
            element={<ServiceProviderDetails />}
          />
        </Route>
      </Routes>
      <ToastContainer
        autoClose={2000}
        theme="colored"
        position="bottom-right"
      />
    </div>
  );
}

export default App;
