import React, { createContext, useState,useContext, ReactNode } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    user: any;  
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const defaultValue: AuthContextType = {
    isAuthenticated: false,
    user: null,
    login: async () => {},
    logout: () => {}
};

export const AuthContext = createContext<AuthContextType>(defaultValue);

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [authState, setAuthState] = useState(defaultValue);

    const login = async (email: string, password: string) => {
        console.log("Login logic here");
        // Perform login and update state
        setAuthState(prevState => ({
            ...prevState,
            isAuthenticated: true,
            user: { email }, // Assuming user's email is stored
        }));
    };

    const logout = () => {
        console.log("Logout logic here");
        // Reset state, keep functions intact
        setAuthState(prevState => ({
            ...prevState,
            isAuthenticated: false,
            user: null
        }));
    };

    return (
        <AuthContext.Provider value={{ ...authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
