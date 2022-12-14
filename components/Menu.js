import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { deviceHeight, deviceWidth } from "../api/constants";
import { useTranslation } from "react-i18next";
import { colors } from "../styles/globals";

export default function Menu(props) {
  const { logout, user } = useContext(AuthContext);
  const { t, i18n } = useTranslation();
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      <View>
        <Image
          style={styles.logo}
          source={require("../assets/LogoProyecto2.8.png")}
        />
        <Text style={styles.title}>{user.name}</Text>
        <DrawerItemList {...props} />
      </View>
      <Pressable style={styles.logout} onPress={() => logout()}>
        <MaterialIcons name="logout" size={24} color="black" />
        <Text style={styles.logout_text}>{t("Cerrar sesión")}</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  title: {
    alignSelf: "center",
    fontSize: 20,
    marginBottom: 40,
    fontFamily: "Cabin-Bold",
    color: colors.dark,
  },
  logout: {
    flexDirection: "row",
    marginTop: deviceHeight * 0.1,
    marginBottom: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderTopWidth: 2,
    width: deviceWidth * 1,
  },
  logout_text: {
    marginLeft: 10,
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontFamily: "Cabin-Bold",
    color: colors.dark,
  },
});
