import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainStackNavigator } from "./StackNavigator";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false
    }}>
      <Drawer.Screen name="Inicio" component={MainStackNavigator}/>
    </Drawer.Navigator>
  );
}

