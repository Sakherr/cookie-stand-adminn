import React, { createContext, useState, useContext } from "react";
import { loginPOST, logout } from "../services/auth";
import jwt from "jsonwebtoken";

export const UserContext = createContext();
export const AuthContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleLogin(username, password) {
    setLoading(true);
    setError(null);

    try {
      const data = await loginPOST(username, password);
      const decoded = jwt.decode(data.access);
      setUser({ username: decoded.username, id: decoded.user_id });
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    setUser(null);
    logout();
  }

  const authContextValue = {
    login: handleLogin,
    logout: handleLogout,
    error,
    loading,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <UserContext.Provider value={user}>
        {children}
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}
