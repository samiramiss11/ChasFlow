import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminPage from './components/Dashboard/AdminPage';
import NotFoundPage from './pages/NotFoundPage';
import BookingAction from './components/Forms/BookingAction';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/booking-action" element={<BookingAction />} />
      </Routes>
    </Router>
  );
};

export default App;
