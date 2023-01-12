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

export default function HelpCompareScreen() {
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
          {t("¿Cómo comparo mis productos en Listify Market?")}
        </Text>
        <Text style={styles.text}>
          {t(
            "Para comparar tus productos en Listify Market debes ingresar a la sección de comparar y presionar el botón de agregar producto. Luego debes ingresar el nombre del producto que deseas comparar y presionar el botón de buscar producto. Luego de esto, debes seleccionar el producto que deseas agregar a la lista de comparación y presionar el botón de agregar producto. Luego de esto, puedes agregar todos los productos que desees comparar y presionar el botón de comparar productos. Luego de esto, se mostrará una lista con los productos que has agregado a la lista de comparación y podrás ver el precio de cada uno de ellos."
          )}
        </Text>
        <Text style={styles.text_title}>
          {t("Una vez comparados los productos, ¿Qué puedo hacer?")}
        </Text>
        <Text style={styles.text}>
          {t(
            "Una vez que has comparado los productos, puedes presionar el botón de eliminar producto para eliminar un producto de la lista de comparación. También puedes presionar el botón de eliminar todos los productos para eliminar todos los productos de la lista de comparación. También puedes presionar el botón de compartir lista para compartir la lista de comparación con tus amigos."
          )}
        </Text>
        <Text style={styles.text_title}>
          {t("¿Están actualizados los precios en las comparaciones?")}
        </Text>
        <Text style={styles.text}>
          {t(
            "Los precios de los productos en las comparaciones son actualizados automáticamente cada 24 horas."
          )}
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
