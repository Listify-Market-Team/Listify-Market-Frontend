import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Image,
} from "react-native";
import { Fontisto, AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { colors } from "../styles/globals";
import Svg,{Circle} from 'react-native-svg'

function HelpCategory(props) {
  const { t } = useTranslation();

  const handlePress = () => {
    if (props.title === "Listas") {
      props.navigation.navigate("HelpList");
    } else if (props.title === "Comparaciones") {
      props.navigation.navigate("HelpCompare");
    } else if (props.title === "Supermercados") {
      props.navigation.navigate("HelpMarkets");
    } else if (props.title === "Categorias") {
      props.navigation.navigate("HelpCategories");
    }
  };

  return (
    <TouchableHighlight onPress={handlePress}>
      <View style={styles.categoryContainer}>
        <View style={styles.iconContainer}>
          <Svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Circle cx="18" cy="18" r="18" fill="#00D36D" />
          </Svg>
          {props.title === "Listas" ? (
            <Image
              source={require("../assets/check-list1.png")}
              style={styles.imageIcon}
            />
          ) : props.title === "Comparaciones" ? (
            <Image
              source={require("../assets/leverage1.png")}
              style={styles.imageIcon}
            />
          ) : props.title === "Supermercados" ? (
            <Image
              source={require("../assets/restaurant1.png")}
              style={styles.imageIcon}
            />
          ) : props.title === "Categorias" ? (
            <Image
              source={require("../assets/categories.png")}
              style={styles.imageIcon}
            />
          ) : null}
        </View>
        <Text style={styles.categoryText}>{t(props.title)}</Text>
        <View style={styles.arrowContainer}>
          <AntDesign name="right" size={16} color="black" />
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default function HelpScreen({ navigation }) {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("Necesitas ayuda?")}</Text>
      <View style={styles.HelpCategory}>
        <HelpCategory title="Listas" navigation={navigation} />
        <HelpCategory title="Comparaciones" navigation={navigation} />
        <HelpCategory title="Supermercados" navigation={navigation} />
        <HelpCategory title="Categorias" navigation={navigation} />
      </View>
      <Text style={styles.title}>{t("Contacto")}</Text>
      <View style={styles.contactContainer}>
        <View style={styles.contact}>
          <Ionicons name="call-outline" size={24} color={colors.lightGreen} />
          <Text style={styles.text}>{"(809) 111-2222"}</Text>
        </View>
        <View style={styles.contact}>
          <Feather name="mail" size={24} color={colors.lightGreen} />
          <Text style={styles.text}>soporte@listifymarket.com</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.light,
    alignItems: "center",
  },
  HelpCategory: {
    marginTop: 20,
    width: "85%",
  },
  title: {
    fontSize: 30,
    color: colors.dark,
    textDecorationLine: "underline",
    marginBottom: 0,
    marginTop: 60,
    fontFamily: "Roboto",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageIcon: {
    width: 28,
    height: 28,
    position: "absolute",
  },
  categoryContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    flexDirection: "row",
    padding: 15,
    marginTop: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  arrowContainer: {
    alignSelf: "center",
    marginLeft: "auto",
  },
  categoryText: {
    fontSize: 14,
    marginLeft: 20,
    marginRight: 90,
    textAlign: "left",
    fontFamily: "Roboto",
  },
  contactContainer: {
    padding: 15,
    marginTop: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contact: {
    flexDirection: "row",
    padding: 15,
    marginTop: 1,
    alignSelf: "stretch",
  },
  text: {
    fontSize: 14,
    marginLeft: 20,
    marginRight: 90,
    textAlign: "left",
    fontFamily: "Roboto",
  },
});
