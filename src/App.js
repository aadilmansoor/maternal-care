import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Home from './Home/Home';
import Footer from './Common/Footer';
import ClientRegister from './Client/ClientRegister';
import AdminDashBoard from './ADMIN/Admindashboard/AdminDashBoard';
import SpRegister from './Service_Provider/SpRegister';
import LeaveRequest from './ADMIN/LeaveRequest/LeaveRequest';
import Bookings from './ADMIN/Bookings/Bookings';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/client-register' element={<ClientRegister />} />
        <Route path='/admin-dashboard' element={<AdminDashBoard/>} />
        <Route path='/service-provider-register' element={<SpRegister/>} />
        <Route path='/leave-request' element={<LeaveRequest/>} />
        <Route path='/bookings' element={<Bookings/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
