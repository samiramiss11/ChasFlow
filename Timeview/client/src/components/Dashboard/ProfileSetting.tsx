import React from 'react';
import { useProfile } from '../../context/ProfileContext';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfileSetting = () => {
    const { profile } = useProfile(); // Now correctly extracting profile data from context
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/'); // Redirect to the login page after logout
    };

    return profile ? (
        <div>
            <h1>Profile Settings</h1>
            <p>Name: {profile.firstName}</p>
            <p>Aftername: {profile.aftername}</p>
            <p>Email: {profile.email}</p>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    ) : (
        <p>Loading profile...</p>
    );
};

export default ProfileSetting;
