import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Admin/AdminDashboard';
import SellerDashboard from './Seller/SellerDashboard';
import UserDashboard from './User/UserDashboard';
import Header from './Components/Header';

import LoginPage from './Login/Loginpage';
import Bookpage from './Login/Bookpage';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/seller" element={<SellerDashboard />} />
        <Route path="/login" element={<LoginPage />} />
         <Route path="/books" element={<Bookpage />} />
        
      </Routes>
    </Router>
  );
}

export default App;