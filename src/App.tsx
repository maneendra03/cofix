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
import Maps from './pages/Maps';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/notices" element={
          <ProtectedRoute>
            <Notices />
          </ProtectedRoute>
        } />
        <Route path="/maps" element={
          <ProtectedRoute>
            <Maps />
          </ProtectedRoute>
        } />
        <Route path="/issues" element={
          <ProtectedRoute>
            <CommunityIssues />
          </ProtectedRoute>
        } />
        <Route path="/schemes" element={
          <ProtectedRoute>
            <GovernmentSchemes />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;