import { AuthProvider } from "./context/AuthContext";
import AppContextProvider from "./context/AppContext";
import AppNavigator from "./components/Navigation/AppNavigator";
import LoadingScreen from "./screens/onboarding/LoadingView";

export default function App() {
  return (
    <AppContextProvider>
      <AuthProvider>
        <AppNavigator />
        <LoadingScreen />
      </AuthProvider>
    </AppContextProvider>
  );
}
