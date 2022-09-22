import { StyleSheet, View, TouchableHighlight } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const menuIconHandler = () => {
  console.log("Press");
};

const helpIconHandler = () => {
  console.log("Press");
};

export const MenuIcon = () => {
  return (
    <TouchableHighlight
      onPress={() => {
        menuIconHandler();
      }}
      style={styles.MenuIcon}
    >
      <View>
        <SimpleLineIcons name="menu" size={26} color="black" />
      </View>
    </TouchableHighlight>
  );
};

export const HelpIcon = () => {
  return (
    <TouchableHighlight
      onPress={() => {
        helpIconHandler();
      }}
    >
      <View>
        <Feather name="help-circle" size={26} color="black" />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  MenuIcon: {
    paddingRight: 40,
  },
});
