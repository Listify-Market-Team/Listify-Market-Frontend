import { StyleSheet } from "react-native";

export const colors = {
  light: "#E8EFEF",
  dark: "#0B3F57",
  green: "#00A47E",
  ligthGreen: "#00D36D",
  black: "#3D3D3D",
  gray: "#E8E8E8",
};

export const globalStyles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.light,
    paddingHorizontal: 25,
  },
});
