import { Platform, StyleSheet, KeyboardAvoidingView } from "react-native";
import React from "react";
import ForgetPassword from "../components/ForgetPassword";

export default function ForgetPasswordScreen({
  navigation: { goBack, navigate },
  route,
}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.view}>
      <ForgetPassword goBack={goBack} navigate={navigate} data={route.params} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});