import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);

    const login = async (user, password) => {
        console.log("Logging in:", user); 
        try {
            const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
            const response = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: user, password }),
            });
            if (!response.ok) throw new Error("Login failed");
            const data = await response.json();
            setIsAuthenticated(true);
            setUsername(data.username || user); 
        } catch (error) {
            console.error("Error logging in:", error);
            // Fallback to mock login if API call fails 
            if (user === "admin" && password === "password123") {
                setIsAuthenticated(true);
                setUsername(user);
            } else {
                throw new Error("Invalid username or password");
            }
        }
    };

    const logout = () => {
        console.log("Logging out...");
        setIsAuthenticated(false);
        setUsername(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);