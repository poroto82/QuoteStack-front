import React, { createContext, useContext, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Services/authService";
import { useLocalStorage } from "./useLocalStorage";



const AuthContext = createContext();

export function AuthProvider({ children }) {
  
  const [user, setUser] = useLocalStorage("loggedUser", null);

  const navigate = useNavigate();


  const login = async (data) => {
    const response = await loginUser(data);
    if (response.status === 200) {
      setUser(response.data.access);
      navigate("/home", { replace: true });
    }
  };

  // const register = async (data) => {
  //   const response = await registerUser(data);
  //   if (response.status === 200) {
  //     setUser(response.data);
  //     navigate("/home", { replace: true });
  //   }
  // };

  const logout = () => {
    setUser(null);
    
  }

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);