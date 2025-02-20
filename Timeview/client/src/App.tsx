import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './components/Dashboard/AdminPage';
import BookingConsult from './components/Forms/BookingConsult';
import BookingAction from './components/Forms/BookingAction';
import BookingForm from './components/Forms/BookingForm';
import BookingConfirmation from './components/Forms/BookingConfirmation';
import ProfileSetting from './components/Dashboard/ProfileSetting';
import Consultant from './components/Dashboard/Consultant';
import { BookingProvider } from './context/BookingContext';
import { ProfileProvider } from './context/ProfileContext';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';


const App = (): JSX.Element => {
  const { isAuthenticated, login, logout } = useAuth();
  return (
    <Router>
      <AuthProvider>
        <BookingProvider>
          <ProfileProvider>
            <Navbar />
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/admin/*" element={<AdminPage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/booking-consult" element={<BookingConsult />} />
              <Route path="/booking-action" element={<BookingAction />} />
              <Route path="/booking-form" element={<BookingForm />} />
              <Route path="/booking-form" element={<BookingForm />} />
              <Route path="/booking-confirmation" element={<BookingConfirmation />} />
              <Route path="/profile-setting" element={<ProfileSetting />} />
              <Route path="/consultant" element={<Consultant />} />
            </Routes>
            <Footer />
          </ProfileProvider>
        </BookingProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
