import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MenuIcon, HelpIcon, BackIcon } from "../Header";
import HomeScreen from "../../screens/HomeScreen";
import HelpScreen from "../../screens/HelpScreen";

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

// these classes just have placeholder names, you can update them as desired
const styles = StyleSheet.create({
  class1: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    left: 10,
    paddingRight: 20,
  },
  class2: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    right: 10,
  },
  class3: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    left: 10,
    paddingRight: 20,
  },
  class4: {
    backgroundColor: "#B5D3D3",
  },
});
