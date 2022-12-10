import { StyleSheet } from "react-native";

export const colors = {
  light: "#E8EFEF",
  dark: "#0B3F57",
  green: "#00A47E",
  ligthGreen: "#00D36D",
};

export const globalStyles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.light,
    paddingHorizontal: 25,
  },
});
