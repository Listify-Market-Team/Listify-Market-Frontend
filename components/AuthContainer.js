import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { deviceHeight, deviceWidth } from "../api/constants";
import i18n from "i18next";

export default function AuthContainer({ children, title }) {
  return (
    <ImageBackground
      source={require("../resources/Login-Background.png")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.TranslateButton}>
          <TouchableOpacity
            onPress={() => {
              i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
            }}
            style={styles.translation}
          >
            <MaterialIcons name="translate" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Image
          style={styles.logo}
          source={require("../resources/Logo-Proyecto2-1.png")}
        />
        <SafeAreaView>
          <Text style={styles.title}>{title}</Text>
        </SafeAreaView>
        {children}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    width: deviceWidth,
    height: deviceHeight,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  TranslateButton: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: 20,
  },
  translation: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
  logo: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginTop: deviceHeight * 0.04,
  },
  title: {
    color: "#FFF",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: deviceHeight * 0.06,
    marginBottom: deviceHeight * 0.04,
    textDecorationLine: "underline",
  },
});
