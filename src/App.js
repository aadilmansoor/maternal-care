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
} from "./pages";

import { Footer } from "./components";

function App() {
  return (
    <div>
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
