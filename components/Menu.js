import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Menu(props) {
  const { logout } = useContext(AuthContext);
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
        <Text style={styles.title}>TestUser</Text>
        <DrawerItemList {...props} />
      </View>
      <Pressable style={styles.logout} onPress={() => logout()}>
        <MaterialIcons name="logout" size={24} color="black" />
        <Text style={styles.logout_text}>Log Out</Text>
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
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  logout: {
    flexDirection: "row",
    marginTop: "100%",
    marginBottom: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderTopWidth: 2,
    width: "100%",
  },
  logout_text: {
    marginLeft: 10,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});
