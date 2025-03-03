// ProfileSetting.tsx keep this
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext';
// import { useAuth } from '../../context/AuthContext';

const ProfileSetting = () => {
  const { profile, loadProfile } = useProfile();
  // const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    loadProfile(); // Fetch profile when the component mounts
  }, [loadProfile]);

  const handleLogout = () => {
    // logout();
    navigate('/login'); // Redirect to login after logout
  };

  return (
    <div>
      {profile ? (
        <div>
          <h1>Profile Settings</h1>
          <p>Namn: {profile.firstName}</p>
          <p>EfterName: {profile.lastName}</p>
          <p>Email: {profile.email}</p>
          <button onClick={handleLogout}>Log Out</button>
          <a href="/forgot-password">Forgot Password?</a>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default ProfileSetting;
