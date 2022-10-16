import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  const login = (user, password) => {
    setIsLoading(true);
    axios
      .post("https://localhost:7209/api/AppUsers/AuthenticateUser", {
        user,
        password,
      })
      .then((response) => {
        let user = response.data;
        if (user.name !== null) {
          setUser(user);
          AsyncStorage.setItem("user", JSON.stringify(user));
          setIsLoading(false);
        }
        else {
          alert("Invalid credentials");
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
    setIsLoading(false);
  };

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
    <AuthContext.Provider value={{ login, logout, isLoading, user }}>
      {children}
    </AuthContext.Provider>
  );
};
