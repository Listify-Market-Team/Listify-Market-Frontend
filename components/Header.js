import { View, TouchableHighlight, TouchableOpacity, StyleSheet } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import i18n from "i18next";

export const MenuIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      onPress={() => {
        navigation.dispatch(DrawerActions.openDrawer());
      }}
    >
      <View>
        <SimpleLineIcons name="menu" size={20} color="black" />
      </View>
    </TouchableHighlight>
  );
};

export const TranslateIcon = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
      }}
    >
      <MaterialIcons name="translate" size={24} color="black" />
    </TouchableOpacity>
  );
};

export const HelpIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      onPress={() => {
        navigation.navigate("Ayuda");
      }}
    >
      <View style={styles.containerHelp}>
        <Feather name="help-circle" size={26} color="black" />
      </View>
    </TouchableHighlight>
  );
};

export const BackIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      onPress={() => {
        navigation.goBack();
      }}
    >
      <View>
        <Ionicons name="arrow-back" size={26} color="black" />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  containerHelp: {
    marginLeft: 20
  }
});
