import { View, Text, ImageBackground, Image, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { deviceHeight, deviceWidth } from "../api/constants";

export default function AuthContainer({children, title}) {
  return (
    <ImageBackground
      source={require("../resources/Login-Background.png")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../resources/Logo-Proyecto2-1.png")}
        />
        <SafeAreaView>
          <Text style={styles.title}>{title}</Text>
        </SafeAreaView>
        {children}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    width: deviceWidth,
    height: deviceHeight,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginBottom: deviceHeight * 0.04,
  },
  title: {
    color: "#FFF",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: deviceHeight * 0.04,
    marginBottom: deviceHeight * 0.04,
    textDecorationLine: "underline",
  },
});