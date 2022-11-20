import { Platform, StyleSheet, KeyboardAvoidingView } from "react-native";
import React from "react";
import Login from "../components/Login";

export default function LoginScreen({ navigation: { navigate } }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.view}>
      <Login navigate={navigate} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});
