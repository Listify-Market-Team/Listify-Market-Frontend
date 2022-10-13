import { createDrawerNavigator } from "@react-navigation/drawer"
import { Ionicons } from "@expo/vector-icons"
import { Feather } from "@expo/vector-icons"
import Menu from "../../components/Menu"
import HomeScreen from "../../screens/HomeScreen"
import HelpScreen from "../../screens/HelpScreen"
import SearchProductScreen from "../../screens/SearchProductScreen"

const Drawer = createDrawerNavigator()

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <Menu {...props} />}
      initialRouteName="Home"
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
        name="Products" 
        component={SearchProductScreen} 
        options={{
          title: "Products",
          drawerIcon: () => (
            <Feather name="search" size={24} color="#00DE68" />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}
