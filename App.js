import "react-native-gesture-handler";
import { AuthProvider } from "./context/AuthContext";
import AppContextProvider from "./context/AppContext";
import AppNavigator from "./components/Navigation/AppNavigator";
import LoadingScreen from "./screens/onboarding/LoadingView";
import { useFonts } from "expo-font";
import DashboardScreen from "./screens/UserDashboardScreen";
import "./services/i18n/i18n";


export default function App() {
  const [fontsLoaded, error] = useFonts({
    "Cabin-Regular": require("./assets/fonts/Cabin-Regular.ttf"),
    "Cabin-Medium": require("./assets/fonts/Cabin-Medium.ttf"),
    "Cabin-Bold": require("./assets/fonts/Cabin-Bold.ttf"),
    "Cabin-Italic": require("./assets/fonts/Cabin-Italic.ttf"),
  });

  if (error) {
    console.log("Error loading fonts");
  }

  return (
    // <AppContextProvider>
    //   <AuthProvider>
    //     <AppNavigator />
    //     <LoadingScreen />
    //   </AuthProvider>
    // </AppContextProvider>

    <DashboardScreen/>
  );
}
