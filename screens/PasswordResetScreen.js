import { Platform, StyleSheet, KeyboardAvoidingView } from "react-native";
import React from "react";
import PasswordReset from "../components/PasswordReset";


export default function PasswordResetScreen({
  navigation: { goBack, navigate },
  route,
}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.view}>
      <PasswordReset goBack={goBack} navigate={navigate} data={route.params} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});
