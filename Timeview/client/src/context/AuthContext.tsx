// AuthContext.tsx keep this
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api'; // API to authenticate the user

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const defaultValue: AuthContextType = {
  isAuthenticated: false,
  login: async () => {},
  logout: () => {},
};

export const AuthContext = createContext<AuthContextType>(defaultValue);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState(defaultValue);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    try {
      await loginUser(email, password); // Call login API
      setAuthState({ ...authState, isAuthenticated: true });
      navigate('/admin'); // Redirect to AdminPage
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthState({ ...authState, isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
