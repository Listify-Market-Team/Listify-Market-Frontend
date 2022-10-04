import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Menu from "../../components/Menu";
import HomeScreen from "../../screens/HomeScreen";
import HelpScreen from "../../screens/HelpScreen";
import ProductInfoScreen from "../../screens/ProductInfoScreen";
import NewListScreen from "../../screens/NewListScreen";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <Menu {...props} />}
      initialRouteName="NewList"
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          drawerIcon: () => (
            <Ionicons name="home-outline" size={24} color="#00DE68" />
          ),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={HelpScreen}
        options={{
          title: "Help",
          drawerIcon: () => (
            <Feather name="help-circle" size={24} color="#00DE68" />
          ),
        }}
      />
      <Drawer.Screen 
      name="NewList" 
      component={NewListScreen} />
      
      <Drawer.Screen
      name="ProductInfo"
      component={ProductInfoScreen}/>
<<<<<<< HEAD
      <Drawer.Screen
      name="ProductInfo"
      component={ProductInfoScreen}/>
=======
      <Drawer.Screen name="NewList" component={NewListScreen} />
>>>>>>> cf6a01a24f4e49d805198daf9e37335d82b298cb
    </Drawer.Navigator>
  );
};
