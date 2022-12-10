import React, { useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { colors } from "../styles/globals";
import Box from "../components/Box";

export default function MarketsScreen({ navigation }) {
  return (
    <Box style={styles.container}>
      <Text>Markets Screen</Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
});
