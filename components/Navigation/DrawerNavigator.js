import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";
import { useTranslation } from "react-i18next";
import Menu from "../../components/Menu";
import { StyleSheet } from "react-native";
import { colors } from "../../styles/globals";

import {
  InventoriesStackNavigator,
  ProductsStackNavigator,
  HelpStackNavigator,
  HomeStackNavigator,
  MarketsStackNavigator,
} from "./StackNavigator";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { t } = useTranslation();
  const homeTitle = t("Inicio");
  const productsTitle = t("Productos");
  const marketsTitle = t("Supermercados");
  const helpTitle = t("Ayuda");
  const inventoryTitle = t("Listas");

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
            <Ionicons name="home-outline" size={24} color={iconsColor} />
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
            <Ionicons name="home-outline" size={24} color={iconsColor} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Markets"
        component={MarketsStackNavigator}
        options={{
          title: marketsTitle,
          headerTitle: marketsTitle,
          drawerIcon: () => (
            <Ionicons name="home-outline" size={24} color={iconsColor} />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="Products"
        component={ProductsStackNavigator}
        options={{
          title: productsTitle,
          headerTitle: productsTitle,
          drawerIcon: () => (
            <Ionicons name="home-outline" size={24} color={iconsColor} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Markets"
        component={null}
        options={{
          title: marketsTitle,
          headerTitle: marketsTitle,
          drawerIcon: () => (
            <Feather name="help-circle" size={24} color={iconsColor} />
          ),
        }}
      /> */}
      {/* <Drawer.Screen
        name="Ayuda"
        component={HelpStackNavigator}
        options={{
          title: helpTitle,
          headerTitle: helpTitle,
          drawerIcon: () => (
            <Feather name="help-circle" size={24} color={iconsColor} />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerItem: {
    fontFamily: "Cabin-Regular",
    fontSize: 18,
    color: colors.dark,
  },
});
