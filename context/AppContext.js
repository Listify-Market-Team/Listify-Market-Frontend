import { useState, createContext, useEffect } from "react";

export const AppContext = createContext({
  isAppLoading: true,
});

export default function AppContextProvider({ children }) {
  const [isAppLoading, setAppIsLoading] = useState(true);

  const stopAppLoading = () => {
    setAppIsLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      stopAppLoading();
    }, 2500);
  }, []);

  // CONTEXT VALUE
  const value = { isAppLoading };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
