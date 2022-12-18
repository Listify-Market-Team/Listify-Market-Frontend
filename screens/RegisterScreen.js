import { Platform, StyleSheet, KeyboardAvoidingView } from "react-native";
import React from "react";
import Register from "../components/Register";


export default function RegisterScreen({
  navigation: { goBack, navigate },
  route,
}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.view}>
      <Register goBack={goBack} navigate={navigate} data={route.params} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});
