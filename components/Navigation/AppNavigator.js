import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStackNavigation } from "./StackNavigator";
import { DrawerNavigator } from "./DrawerNavigator";
import { AuthContext } from "../../context/AuthContext";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";

const AppNavigator = () => {
  const { isLoading, user } = useContext(AuthContext);

  if (isLoading) {
    return (
      <ImageBackground
        source={require("../../resources/Login-Background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container}>
          <ActivityIndicator size={"large"} color="#FFF"/>
        </View>
      </ImageBackground>
    );
  }
  return (
    <NavigationContainer>
      {user !== null ? <DrawerNavigator /> : <AuthStackNavigation />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default AppNavigator;
