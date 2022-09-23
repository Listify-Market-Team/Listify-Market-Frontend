import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import { MenuIcon, HelpIcon, BackIcon } from "../Components/Header";
import HelpScreen from "../Screens/HelpScreen"


const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={{
      headerLeft: () => <MenuIcon />,
      headerRight: () => <HelpIcon />,
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Help" component={HelpScreen} options={{
        headerLeft: () => <BackIcon />,
        headerRight: () => null,
        title: '',
        headerStyle:{
          backgroundColor: '#B5D3D3'
        }
      }}/>
      {/* Rest of Stack screens here*/}
    </Stack.Navigator>
  );
};


