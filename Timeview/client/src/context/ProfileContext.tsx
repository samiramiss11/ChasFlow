import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
//import { fetchAdminProfile } from '../services/api';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL; 


interface AdminProfile {
    firstName: string;
    aftername: string;
    email: string;
}

interface ProfileContextType {
    profile: AdminProfile | null;
    loadProfile: () => void;
}

const ProfileContext = createContext<ProfileContextType>(null!);
interface ProfileProviderProps {
children: ReactNode; 
}


export const ProfileProvider: React.FC<ProfileProviderProps> = ({ children }) => {
  const [profile, setProfile] = useState<AdminProfile | null>(null);

    const loadProfile = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`${API_URL}/users/profile`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          setProfile(response.data);
        } catch (error) {
          console.error('Failed to fetch profile', error);
        }
      };
    //const loadProfile = async () => {
        //try {
           // const data: AdminProfile = await fetchAdminProfile();
            //setProfile(data);
        //} catch (error) {
          //  console.error('Failed to fetch profile', error);
        //}
    //};

    useEffect(() => {
        loadProfile();
    }, []);

    return (
        <ProfileContext.Provider value={{ profile, loadProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => {
    const context = useContext(ProfileContext);
    if (context === undefined) {
        throw new Error('useProfile must be used within a ProfileProvider');
    }
    return context;
};
