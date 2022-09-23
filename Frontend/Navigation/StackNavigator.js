import React from "react";
import { View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../Screens/HomeScreen";
import { MenuIcon, HelpIcon, BackIcon } from "../Components/Header";
import HelpScreen from "../Screens/HelpScreen"


const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={{
      headerLeft: () => (
        <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', left:10, paddingRight: 20}}>
          <MenuIcon/>
        </View>
      ),
      headerRight: () => (
        <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', right:10}}>
          <HelpIcon/>
        </View>
      ),
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Help" component={HelpScreen} options={{
        headerLeft: () => (
        <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', left:10, paddingRight: 20}}>
          <BackIcon/>
        </View>
      ),
        headerRight: () => null,
        headerShadowVisible: false,
        title: '',
        headerStyle:{
          backgroundColor: '#B5D3D3'
        }
      }}/>
      {/* Rest of Stack screens here*/}
    </Stack.Navigator>
  );
};


