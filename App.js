import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStackNavigation } from "./components/Navigation/StackNavigator";
import { DrawerNavigator } from "./components/Navigation/DrawerNavigator";
import React from "react";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <>
      {isAuthenticated ? (
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <AuthStackNavigation />
        </NavigationContainer>
      )}
    </>
  );
}
