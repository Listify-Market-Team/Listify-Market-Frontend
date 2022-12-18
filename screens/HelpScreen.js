import { StyleSheet, Text, View, Button } from "react-native";

export default function HelpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Help Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#B5D3D3",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
