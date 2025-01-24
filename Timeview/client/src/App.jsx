import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RoomAvailabilityPage from './pages/RoomAvailabilityPage';
import BookingPage from './pages/BookingPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';

// Admin Route Protection Component
const AdminRoute = ({ children }) => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true'; // Replace this with a better authentication solution
  return isAdmin ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/room-availability" element={<RoomAvailabilityPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminPage />
            </AdminRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
