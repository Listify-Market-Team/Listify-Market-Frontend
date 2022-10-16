import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import Menu from "../../components/Menu";
// import HomeScreen from "../../screens/HomeScreen";
// import HelpScreen from "../../screens/HelpScreen";
import ListMainScreen from "../../screens/ListMainScreen";
import ProductInfoScreen from "../../screens/ProductInfoScreen";
import NewListScreen from "../../screens/NewListScreen";
import UpdateListScreen from "../../screens/UpdateListScreen";
import AddProductScreen from "../../screens/AddProductScreen";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <Menu {...props} />}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        component={ListMainScreen}
        options={{
          title: "Inicio",
          headerTitle: "Inicio",
          drawerIcon: () => (
            <Ionicons name="home-outline" size={24} color="#00DE68" />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Help"
        component={HelpScreen}
        options={{
          title: "Help",
          drawerIcon: () => (
            <Feather name="help-circle" size={24} color="#00DE68" />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="ProductInfo"
        component={ProductInfoScreen}
        options={{
          headerTitle: "Información de producto",
          title: "Información de producto",
          drawerIcon: () => (
            <AntDesign name="infocirlceo" size={24} color="#00DE68" />
          ),
        }}
      />
      <Drawer.Screen
        name="AddProduct"
        component={AddProductScreen}
        options={{
          headerTitle: "Agregar producto",
          title: "Agregar producto",
          drawerIcon: () => (
            <Entypo name="add-to-list" size={24} color="#00DE68" />
          ),
        }}
      />
      <Drawer.Screen
        name="NewList"
        component={NewListScreen}
        options={{ headerTitle: "Nueva Lista" }}
      />
      <Drawer.Screen
        name="UpdateList"
        component={UpdateListScreen}
        options={{ headerTitle: "Actualizar Lista" }}
      />
      <Drawer.Screen
        name="Products"
        component={SearchProductScreen}
        options={{
          title: "Products",
          drawerIcon: () => <Feather name="search" size={24} color="#00DE68" />,
        }}
      />
    </Drawer.Navigator>
  );
};
