import { Pressable, Text, StyleSheet } from "react-native";
import { colors } from "../styles/globals";

export default function Button({ onPress, children }) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.btnText}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: colors.green,
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 15,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  btnText: {
    color: "#ffffff",
    fontWeight: 500,
    textTransform: "uppercase",
    textAlign: "center",
  },
});
