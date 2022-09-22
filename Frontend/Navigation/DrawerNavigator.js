import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainStackNavigator } from "./StackNavigator";
import HomeScreen from "../Screens/HomeScreen"
import DefaultScreen from "../Screens/DefaultScreen";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false
    }}>
      <Drawer.Screen name="Home" component={MainStackNavigator}/>
    </Drawer.Navigator>
  );
}

