import { ImageBackground, View, Text, StyleSheet } from "react-native";
import React from "react";

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../resources/Login-Background.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: "100%",
  },
});
