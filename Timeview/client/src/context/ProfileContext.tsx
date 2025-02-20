// ProfileContext.tsx keep this
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { fetchAdminProfile } from '../services/api'; // API to fetch the profile

interface AdminProfile {
  firstName: string;
  lastName: string;
  email: string;
}

interface ProfileContextType {
  profile: AdminProfile | null;
  loadProfile: () => void;
}

const ProfileContext = createContext<ProfileContextType>(null!);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<AdminProfile | null>(null);

  const loadProfile = async () => {
    try {
      const data = await fetchAdminProfile();  // Call API to fetch profile data
      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  return (
    <ProfileContext.Provider value={{ profile, loadProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
