import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./Navigation/StackNavigator";
import { DrawerNavigator } from "./Navigation/DrawerNavigator";



export default function App() {

  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}
