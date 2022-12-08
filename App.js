import { AuthProvider } from "./context/AuthContext";
import AppWrapper from "./components/AppWrapper";
import AppContextProvider from "./context/AppContext";

export default function App() {
  return (
    <AppContextProvider>
      <AuthProvider>
        <AppWrapper />
      </AuthProvider>
    </AppContextProvider>
  );
}
