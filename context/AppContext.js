import { useState, createContext, useEffect } from "react";

export const AppContext = createContext({ isAppLoading: true });

export default function AppContextProvider({ children }) {
  const [isAppLoading, setAppIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAppIsLoading(false);
    }, 2500);
  }, []);
  // CONTEXT VALUE
  const value = { isAppLoading };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
