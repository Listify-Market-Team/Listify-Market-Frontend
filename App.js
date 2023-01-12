import "react-native-gesture-handler";
import { AuthProvider } from "./context/AuthContext";
import AppContextProvider from "./context/AppContext";
import AppNavigator from "./components/Navigation/AppNavigator";
import LoadingScreen from "./screens/onboarding/LoadingView";
import { useFonts } from "expo-font";
import "./services/i18n/i18n";

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
