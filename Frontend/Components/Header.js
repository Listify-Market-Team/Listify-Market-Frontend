import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const menuIconHandler = () => {
  console.log("Press");
};

const helpIconHandler = () => {
  console.log("Press");
};

const MenuIcon = () => {
  return (
    <TouchableHighlight
      onPress={() => {
        menuIconHandler();
      }}
      style={styles.Icons}
    >
      <View>
        <SimpleLineIcons name="menu" size={26} color="black" />
      </View>
    </TouchableHighlight>
  );
};

const HelpIcon = () => {
  return (
    <TouchableHighlight
      onPress={() => {
        helpIconHandler();
      }}
      style={styles.Icons}
    >
      <View>
        <Feather name="help-circle" size={26} color="black" />
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
    alignItems: "center",
    backgroundColor: "#fff",
  },
  Icons: {
    padding: 4,
  },
  HeaderTitle: {
    flex: 1,
    fontFamily: "Inter-SemiBold",
    fontSize: 16,
    marginLeft: 30,
  },
});
