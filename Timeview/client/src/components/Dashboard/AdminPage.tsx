import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import LoginPage from '../../pages/LoginPage';
import ProfileSetting from './ProfileSetting';
import Consultant from './Consultant';
import TimeReport from './TimeReport';

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-page">

      <div className="dashboard-layout">
        <aside className="sidebar">
          <ul>
            <li onClick={() => navigate('/login-page')}>Home</li>
            <li onClick={() => navigate('/profile-setting')}>Admin Profile</li>
            <li onClick={() => navigate('/consultant')}>Consultants</li>
            <li onClick={() => navigate('/time-report')}>Reports</li>
          </ul>
        </aside>
        <main className="content">
          <Routes>

          </Routes>
        </main>

    </div>
    </div>
  );
};

export default AdminPage;
