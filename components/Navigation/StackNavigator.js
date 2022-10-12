import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MenuIcon, HelpIcon, BackIcon } from "../Header";
import HomeScreen from "../../screens/HomeScreen";
import HelpScreen from "../../screens/HelpScreen";
import LoginScreen from "../../screens/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <View style={styles.class1}>
            <MenuIcon />
          </View>
        ),
        headerRight: () => (
          <View style={styles.class2}>
            <HelpIcon />
          </View>
        ),
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Help"
        component={HelpScreen}
        options={{
          headerLeft: () => (
            <View style={styles.class3}>
              <BackIcon />
            </View>
          ),
          headerRight: () => null,
          headerShadowVisible: false,
          title: "",
          headerStyle: styles.class4,
        }}
      />
      {/* other screens... */}
    </Stack.Navigator>
  );
};

export const AuthStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};


