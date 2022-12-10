import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";
import { useTranslation } from "react-i18next";
import Menu from "../../components/Menu";
import { MenuIcon, HelpIcon, TranslateIcon } from "../Header";
import BackOfficeHome from "../../screens/BackOfficeHome";

import {
  InventoriesStackNavigator,
  ProductsStackNavigator,
  HelpStackNavigator,
} from "./StackNavigator";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { t } = useTranslation();
  const homeTitle = t("Inicio");
  const productsTitle = t("Productos");
  const marketsTitle = t("Supermercados");
  const helpTitle = t("Ayuda");

  const iconsColor = "#00DE68";

  return (
    <Drawer.Navigator
      drawerContent={(props) => <Menu {...props} />}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="BackOffice"
        component={BackOfficeHome}
        options={{
          title: "BackOffice",
          headerTitle: "BackOffice",
          drawerIcon: () => (
            <Ionicons name="home-outline" size={24} color={iconsColor} />
          ),
        }}
      />
      <Drawer.Screen
        name="Home"
        component={InventoriesStackNavigator}
        options={{
          title: homeTitle,
          headerTitle: homeTitle,
          drawerIcon: () => (
            <Ionicons name="home-outline" size={24} color={iconsColor} />
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
            <Feather name="help-circle" size={24} color={iconsColor} />
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
      <Drawer.Screen
        name="Ayuda"
        component={HelpStackNavigator}
        options={{
          title: helpTitle,
          headerTitle: helpTitle,
          drawerIcon: () => (
            <Feather name="help-circle" size={24} color={iconsColor} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
