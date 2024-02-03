import React, { createContext, useContext, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../Services/authService";
import { useLocalStorage } from "./useLocalStorage";
import { useToast } from '@chakra-ui/react';



const AuthContext = createContext();

export function AuthProvider({ children }) {
  
  const [user, setUser] = useLocalStorage("loggedUser", null);
  const toast = useToast()

  const navigate = useNavigate();


  const login = async (data) => {
    try{
      const response = await loginUser(data);
      if (response.status === 200) {
        setUser(response.data.access);
        navigate("/today", { replace: true });
      }
    }
    catch(error){
      toast({
        title: `${error}`,
        status: 'error',
        isClosable: true,
      })
      console.error(error)
    }
  };

  const register = async (data) => {
    try{
      const response = await registerUser(data);
      if (response.status === 200) {
        setUser(response.data);
        navigate("/today", { replace: true });
      }
    }
    catch(error){
      toast({
        title: `${error}`,
        status: 'error',
        isClosable: true,
      })
      console.error(error)
    }
  };

  const logout = () => {
    setUser(null);
    
  }

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      register
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);