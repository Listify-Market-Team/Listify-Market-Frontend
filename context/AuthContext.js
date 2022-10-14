import React, { createContext, useState } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const login = (user, password) => {
    console.log(user);
    console.log(password);
    setIsLoading(false);
    setUserToken("asdf");
  };

  const logout = () => {
    setIsLoading(false);
    setUserToken(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
