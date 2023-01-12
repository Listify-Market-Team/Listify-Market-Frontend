import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";
import { useTranslation } from "react-i18next";
import Menu from "../../components/Menu";
import { StyleSheet, Image } from "react-native";
import { colors } from "../../styles/globals";

import {
  InventoriesStackNavigator,
  ProductsStackNavigator,
  HelpStackNavigator,
  HomeStackNavigator,
  MarketsStackNavigator,
  UserDashboardNavigator,
} from "./StackNavigator";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { t } = useTranslation();
  const homeTitle = t("Inicio");
  const productsTitle = t("Productos");
  const marketsTitle = t("Supermercados");
  // const helpTitle = t("Ayuda");
  const inventoryTitle = t("Mis Listas");
  const dashboardTitle = t("Tablero");

  const iconsColor = "#00DE68";

  return (
    <Drawer.Navigator
      drawerContent={(props) => <Menu {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: styles.drawerItem,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          title: homeTitle,
          headerTitle: homeTitle,
          drawerIcon: () => (
            <View>
              <svg
                width="28"
                height="28"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="18" fill={colors.lightGreen} />
              </svg>
              <View style={styles.iconContainer}>
                <Image
                  source={require("../../assets/HomeLogo.svg")}
                  style={styles.imageIcon}
                />
              </View>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Products"
        component={ProductsStackNavigator}
        options={{
          title: productsTitle,
          headerTitle: productsTitle,
          drawerIcon: () => (
            <View>
              <svg
                width="28"
                height="28"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="18" fill={colors.lightGreen} />
              </svg>
              <View style={styles.iconContainer}>
                <Image
                  source={require("../../assets/categories.png")}
                  style={styles.imageIcon}
                />
              </View>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Inventories"
        component={InventoriesStackNavigator}
        options={{
          title: inventoryTitle,
          headerTitle: inventoryTitle,
          drawerIcon: () => (
            <View>
              <svg
                width="28"
                height="28"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="18" fill={colors.lightGreen} />
              </svg>
              <View style={styles.iconContainer}>
                <Image
                  source={require("../../assets/check-list1.png")}
                  style={styles.imageIcon}
                />
              </View>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Markets"
        component={MarketsStackNavigator}
        options={{
          title: marketsTitle,
          headerTitle: marketsTitle,
          drawerIcon: () => (
            <View>
              <svg
                width="28"
                height="28"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="18" fill={colors.lightGreen} />
              </svg>
              <View style={styles.iconContainer}>
                <Image
                  source={require("../../assets/restaurant1.png")}
                  style={styles.imageIcon}
                />
              </View>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Dashboard"
        component={UserDashboardNavigator}
        options={{
          title: dashboardTitle,
          headerTitle: dashboardTitle,
          drawerIcon: () => (
            <View>
              <svg
                width="28"
                height="28"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="18" fill={colors.lightGreen} />
              </svg>
              <View style={styles.iconContainer}>
                <Image
                  source={require("../../assets/HomeLogo.svg")}
                  style={styles.imageIcon}
                />
              </View>
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerItem: {
    fontFamily: "Cabin-Regular",
    fontSize: 18,
    color: colors.dark,
  },
  imageIcon: {
    width: 25,
    height: 25,
  },
  iconContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
