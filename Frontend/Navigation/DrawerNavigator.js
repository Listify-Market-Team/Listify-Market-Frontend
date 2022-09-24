import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { MainStackNavigator } from "./StackNavigator";
import Menu from "../Components/Menu";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <Menu {...props}/>} screenOptions={{
      headerShown: false,
      drawerLabelStyle: {marginLeft: -16}
    }}>
      <Drawer.Screen name="HomeStack" component={MainStackNavigator} options={{
        title: 'Home',
        drawerIcon: () => <Ionicons name="home-outline" size={24} color="#00DE68" />
      }}/>
    </Drawer.Navigator>
  );
}

