import { View, TouchableHighlight } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";

export const MenuIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      onPress={() => {
        navigation.dispatch(DrawerActions.openDrawer());
      }}
    >
      <View>
        <SimpleLineIcons name="menu" size={26} color="black" />
      </View>
    </TouchableHighlight>
  );
};

export const HelpIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      onPress={() => {
        navigation.navigate("Help");
      }}
    >
      <View>
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
