import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./components/Navigation/StackNavigator";
import { DrawerNavigator } from "./components/Navigation/DrawerNavigator";
import ListMainScreen from './components/ListMainScreen'

export default function App() {
  return (
    <NavigationContainer>
      {/* <MainStackNavigator /> */}
      {/* <DrawerNavigator /> */}
      <ListMainScreen/>
    </NavigationContainer>
  );
}
