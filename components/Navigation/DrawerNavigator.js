import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import Menu from "../../components/Menu";
import { MenuIcon, HelpIcon, TranslateIcon } from "../Header";
import HomeScreen from "../../screens/HomeScreen";
import HelpScreen from "../../screens/HelpScreen";
import LoginScreen from "../../screens/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen";
import { MainStackNavigator } from "./StackNavigator";
import ListMainScreen from "../../screens/ListMainScreen";
import ProductInfoScreen from "../../screens/ProductInfoScreen";
import NewListScreen from "../../screens/NewListScreen";
import UpdateListScreen from "../../screens/UpdateListScreen";
import AddProductScreen from "../../screens/AddProductScreen";
import SearchProductScreen from "../../screens/SearchProductScreen";
import ProductListScreen from "../../screens/productListScreen";
import { useTranslation } from "react-i18next";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { t, i18n } = useTranslation();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <Menu {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerLeft: () => (
          <View style={styles.class1}>
            <MenuIcon />
          </View>
        ),
        headerRight: () => (
          <View style={styles.class2}>
            <TranslateIcon />
            <HelpIcon />
          </View>
        ),
      }}
    >
      <Drawer.Screen
        name="Home"
        component={ListMainScreen}
        options={{
          title: t("Inicio"),
          headerTitle: t("Inicio"),
          drawerIcon: () => (
            <Ionicons name="home-outline" size={24} color="#00DE68" />
          ),
        }}
      />
      <Drawer.Screen
        name="Ayuda"
        component={HelpScreen}
        options={{
          title: t("Ayuda"),
          drawerIcon: () => (
            <Feather name="help-circle" size={24} color="#00DE68" />
          ),
        }}
      />
      <Drawer.Screen
        name="Productos"
        component={SearchProductScreen}
        options={{
          title: t("Productos"),
          drawerIcon: () => <Feather name="search" size={24} color="#00DE68" />,
        }}
      />
      <Drawer.Screen
        name="AddProduct"
        component={AddProductScreen}
        options={{
          headerTitle: t("Agregar producto"),
          title: t("Agregar producto"),
          // drawerIcon: () => (
          //   <Entypo name="add-to-list" size={24} color="#00DE68" />
          // ),
        }}
      />
      <Drawer.Screen
        name="ProductInfo"
        component={ProductInfoScreen}
        options={{
          headerTitle: t("Información de producto"),
          title: t("Información de producto"),
          // drawerIcon: () => (
          //   <AntDesign name="infocirlceo" size={24} color="#00DE68" />
          // ),
        }}
      />
      <Drawer.Screen
        name="NewList"
        component={NewListScreen}
        options={{ title: t("Agregar Lista"), headerTitle: t("Nueva Lista") }}
      />
      <Drawer.Screen
        name="UpdateList"
        component={UpdateListScreen}
        options={{ title: t("Editar Lista"), headerTitle: t("Editar Lista") }}
      />
      <Drawer.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{ title: t("Lista de Productos"), headerTitle: t("Lista de Productos"), unmountOnBlur: true }}
      />
      
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  class1: {
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
  },
  class2: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
});
