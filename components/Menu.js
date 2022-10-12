import { StyleSheet, Text, View, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

export default function Menu(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/LogoProyecto2.8.png")}
        />
        <Text style={styles.title}>TestUser</Text>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  title: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
