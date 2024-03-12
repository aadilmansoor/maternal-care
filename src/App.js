import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import ClientRegister from "./pages/Client/ClientRegister/ClientRegister";
import AdminDashBoard from "./pages/Admin/Admindashboard/AdminDashBoard";
import SpRegister from "./pages/Service_Provider/SpRegister";
import LeaveRequest from "./pages/Admin/LeaveRequest/LeaveRequest";
import Bookings from "./pages/Admin/Bookings/Bookings";
import ClientDashboard from "./pages/Client/ClientDashboard/ClientDashboard";
import ProviderDashboard from "./pages/Service_Provider/ProviderDashboard/ProviderDashboard";
import Categories from "./pages/Admin/Categories/Categories";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/client-register" element={<ClientRegister />} />
        <Route path="/admin-dashboard" element={<AdminDashBoard />} />
        <Route path="/user-dashboard" element={<ClientDashboard />} />
        <Route
          path="/care-provider-dashboard"
          element={<ProviderDashboard />}
        />
        <Route path="/service-provider-register" element={<SpRegister />} />
        <Route path="/leave-request" element={<LeaveRequest />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/categories" element={<Categories/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
