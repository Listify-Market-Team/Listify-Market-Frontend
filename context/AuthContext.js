import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [user, setUser] = useState(null);

  const login = (user, password) => {
    setIsLoading(true);
    // axios
    //   .post("http://localhost:3000/login", {
    //     user,
    //     password,
    //   })
    //   .then((response) => {
    //     let user = response.data;
    //     setUser(user);
    //     setUserToken(user.token);
    //     AsyncStorage.setItem("user", JSON.stringify(user));
    //     AsyncStorage.setItem("userToken", user.token);
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setIsLoading(false);
    //   });
    AsyncStorage.setItem("userToken", "asdf");
    setUserToken("asdf");
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    AsyncStorage.removeItem("user");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let user = await AsyncStorage.getItem("user");
      let userToken = await AsyncStorage.getItem("userToken");
      // if (user && userToken) {
      //   setUser(JSON.parse(user));
      //   setUserToken(userToken);
      // }
      setUserToken(userToken);
      setIsLoading(false);
    } catch (error) {
      console.log("isLogged in error: ", error);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken, user }}>
      {children}
    </AuthContext.Provider>
  );
};
