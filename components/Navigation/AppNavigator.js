import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStackNavigation } from "./StackNavigator";
import { DrawerNavigator } from "./DrawerNavigator";
import { AuthContext } from "../../context/AuthContext";
import { ActivityIndicator, View, StyleSheet } from "react-native";

const AppNavigator = () => {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {userToken !== null ? <DrawerNavigator /> : <AuthStackNavigation />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default AppNavigator;
