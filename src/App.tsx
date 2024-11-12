import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './pages/Index';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import CommunityIssues from './pages/CommunityIssues';
import GovernmentSchemes from './pages/GovernmentSchemes';
import Notices from './pages/Notices';
import Profile from './pages/Profile';
<<<<<<< HEAD
=======
import Map from 'react-map-gl/dist/esm/components/map';
>>>>>>> dbab9e4 (Initial commit)
// import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Protected routes */}
        <Route path="/home" element={<Home />} />
<<<<<<< HEAD
=======
        <Route path="/map" element={<Map />} />
>>>>>>> dbab9e4 (Initial commit)
        <Route path="/issues" element={<CommunityIssues />} />
        <Route path="/schemes" element={<GovernmentSchemes />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/Profile" element={<Profile/>} />
        
      </Routes>
    </Router>
  );
}

export default App;