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
import Map from 'react-map-gl/dist/esm/components/map';
import Maps from './pages/Maps';
// import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        
        {/* Protected routes */}
        <Route path="/maps" element={<Maps />} />
        <Route path="/issues" element={<CommunityIssues />} />
        <Route path="/schemes" element={<GovernmentSchemes />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;