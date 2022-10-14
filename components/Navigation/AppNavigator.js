import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStackNavigation } from "./StackNavigator";
import { DrawerNavigator } from "./DrawerNavigator";
import { AuthContext } from "../../context/AuthContext";
import { ActivityIndicator, View } from "react-native";

const AppNavigator = () => {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    <View>
      <ActivityIndicator size={"large"} />
    </View>;
  }
  return (
    <NavigationContainer>
      <AuthStackNavigation />
    </NavigationContainer>
  );
};

export default AppNavigator;
