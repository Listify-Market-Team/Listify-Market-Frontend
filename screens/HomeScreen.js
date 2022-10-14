import { StyleSheet, Text, View, Button } from "react-native";
import React, {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

export default function HomeScreen({ navigation }) {
  const { logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Help" onPress={() => logout()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#B5D3D3",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
