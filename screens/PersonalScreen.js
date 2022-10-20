import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import React from "react";
import Personal from "../components/Personal";

export default function PersonalScreen({ navigation: { navigate, goBack } }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.view}
    >
      <Personal navigate={navigate} goBack={goBack} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});
