import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStackNavigation } from "./StackNavigator";
import { DrawerNavigator } from "./DrawerNavigator";
import { AuthContext } from "../../context/AuthContext";
import { ActivityIndicator, StyleSheet } from "react-native";
import Box from "../Box";

const AppNavigator = () => {
  const { isLoading, user } = useContext(AuthContext);

  if (isLoading) {
    return (
      <Box>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </Box>
    );
  }
  return (
    <NavigationContainer>
      {user !== null ? <DrawerNavigator /> : <AuthStackNavigation />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default AppNavigator;
