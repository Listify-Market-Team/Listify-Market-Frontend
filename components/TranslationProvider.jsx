import { View, Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import i18n from "i18next";
import { colors } from "../styles/globals";

export default function TranslationProvider({ children, color = colors.dark }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
        }}
        style={styles.translationBtn}
      >
        <MaterialIcons name="translate" size={30} color={color} />
      </Pressable>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  translationBtn: {
    position: "absolute",
    top: 0,
    right: 0,
    marginRight: 20,
    marginTop: 20,
    zIndex: 88,
  },
  container: {
    flex: 1,
    position: "relative",
  },
});
