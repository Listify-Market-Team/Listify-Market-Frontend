import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const MenuIcon = () => {
  return (
    <TouchableHighlight onPress={() => {}} style={styles.MenuIcon}>
      <View>
        <SimpleLineIcons name="menu" size={24} color="black" />
      </View>
    </TouchableHighlight>
  );
};

const HelpIcon = () => {
  return (
    <TouchableHighlight onPress={() => {}}>
      <View>
        <Feather name="help-circle" size={24} color="black" />
      </View>
    </TouchableHighlight>
  );
};

const HeaderTitle = ({ title }) => {
  return <Text style={styles.HeaderTitle}>{title}</Text>;
};

export const Header = ({ title }) => {
  const [fontsLoaded] = useFonts({
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
  });
  return (
    <View style={styles.container}>
      <MenuIcon />
      <HeaderTitle title={title} />
      <HelpIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    backgroundColor: "#fff",
  },
  MenuIcon: {
    // Algun codigo de estilos va aqui, cual no se
  },
  HeaderTitle: {
    fontFamily: "Inter-SemiBold",
    fontSize: 16,
  },
});
