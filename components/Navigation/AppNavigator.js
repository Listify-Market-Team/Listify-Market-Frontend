import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStackNavigation } from "./StackNavigator";
import { DrawerNavigator } from "./DrawerNavigator";
import { AuthContext } from "../../context/AuthContext";
import { ActivityIndicator, StyleSheet, Image, View } from "react-native";
import GradientBackground from "../GradientBackground";
import Box from "../Box";

const AppNavigator = () => {
  const { isLoading, user } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <GradientBackground style={styles.backgroundContainer}>
          <Box>
            <Image
              source={require("../../assets/LogoProyecto2.8.png")}
              style={styles.image}
            />
            <ActivityIndicator size="large" color="#FFFFFF" />
          </Box>
        </GradientBackground>
      </View>
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
    position: "absolute",
    zIndex: 99,
    width: "100%",
    height: "100%",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 50
  },
  backgroundContainer: {
    flex: 1,
  },
});

export default AppNavigator;
