import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  const logout = () => {
    setIsLoading(true);
    setUser(null);
    AsyncStorage.removeItem("user");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let user = await AsyncStorage.getItem("user");
      if (user) {
        setUser(JSON.parse(user));
      }
      setIsLoading(false);
    } catch (error) {
      console.log("isLogged in error: ", error);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoading, user, setUser, logout, setIsLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
