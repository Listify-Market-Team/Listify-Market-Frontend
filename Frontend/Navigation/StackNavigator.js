import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import { MenuIcon, HelpIcon } from "../Components/Header";
import DefaultScreen from "../Screens/DefaultScreen";

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={{
      headerLeft: () => <MenuIcon />,
      headerRight: () => <HelpIcon />,
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Default" component={DefaultScreen} />
      {/* Rest of Stack screens here*/}
    </Stack.Navigator>
  );
};


