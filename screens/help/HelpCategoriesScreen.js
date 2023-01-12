import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Image,
  ScrollView,
} from "react-native";
import { Fontisto, AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { colors } from "../../styles/globals";
import { setDefaultNamespace } from "i18next";

export default function HelpCategoriesScreen() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            style={styles.header_image}
            source={require("../../assets/LogoProyecto2.8.png")}
          />
          <Text style={styles.header_text}>{t("Listify Market")}</Text>
        </View>
        <Text style={styles.text_title}>
          {t("¿Qué es una categoria en Listify Market?")}
        </Text>
        <Text style={styles.text}>
          {t("Una categoria en Listify Market es una seccion de productos que se relacionan entre si. Por ejemplo, en la categoria de Frutas y Verduras se encuentran productos como Manzanas, Papas, Zanahorias, etc.")}
        </Text>
        <Text style={styles.text_title}>
          {t("¿Qué puedes hacer con las categorias en Listify Market?")}
        </Text>
        <Text style={styles.text}>
          {t("Listify Market posee una gran variedad de categorias para que puedas encontrar los productos que necesitas de manera rapida y eficiente.")}
        </Text>
        <Text style={styles.text_title}>
          {t("¿Cómo puedo usar las categorias en Listify Market?")}
        </Text>
        <Text style={styles.text}>
          {t("Para usar las categorias en Listify Market debes ingresar a la sección de categorias y seleccionar la categoria que desees. Luego, se desplegaran los productos de la categoria seleccionada.")}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.light,
  },
  header_image: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
  header: {
    backgroundColor: colors.primary,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  header_text: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.dark,
    marginBottom: 20,
  },
  text_title: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.dark,
    marginTop: 20,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 13,
    color: colors.dark,
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    textAlign: "justify",
  },
});
