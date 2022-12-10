import React, { useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { colors } from "../styles/globals";
import Box from "../components/Box";

export default function HomeScreen({ navigation }) {
  return (
    <Box style={styles.container}>
      <Text>Home Screen</Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
});
