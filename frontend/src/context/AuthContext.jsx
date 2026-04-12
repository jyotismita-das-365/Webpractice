import { createContext, useContext, useEffect, useState } from "react";
import {
  clearAuthSession,
  fetchCurrentUser,
  loginUser,
  registerUser,
  saveAuthSession,
} from "../services/api";

const AuthContext = createContext(null);

const readStoredUser = () => {
  const rawUser = localStorage.getItem("auth-user");
  if (!rawUser) {
    return null;
  }

  try {
    return JSON.parse(rawUser);
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(readStoredUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bootstrapAuth = async () => {
      const token = localStorage.getItem("auth-token");
      const storedUser = localStorage.getItem("auth-user");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const currentUser = await fetchCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.warn("Auth bootstrap fetch failed:", error.message);
        if (storedUser) {
          try {
            setUser(JSON.parse(storedUser));
          } catch {
            clearAuthSession();
            setUser(null);
          }
        } else {
          clearAuthSession();
          setUser(null);
        }
      } finally {
        setLoading(false);
      }
    };

    bootstrapAuth();
  }, []);

  const setSession = (authPayload) => {
    saveAuthSession(authPayload);
    setUser(authPayload.user);
  };

  const login = async (credentials) => {
    const authPayload = await loginUser(credentials);
    setSession(authPayload);
    return authPayload;
  };

  const signup = async (payload) => {
    const authPayload = await registerUser(payload);
    setSession(authPayload);
    return authPayload;
  };

  const logout = () => {
    clearAuthSession();
    setUser(null);
  };

  const value = {
    user,
    loading,
    isAuthenticated: Boolean(user),
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
