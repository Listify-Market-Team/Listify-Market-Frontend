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

export default function HelpListScreen() {
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
          {t("¿Qué es una lista en Listify Market?")}
        </Text>
        <Text style={styles.text}>
          {t(
            "Una lista en Listify Market es tal como su nombre indica, un lugar como un carrito de compras o una bolsa de compras donde puedes agregar productos para posteriormente consultar su precio."
          )}
        </Text>
        <Text style={styles.text_title}>
          {t("¿Qué puedes hacer con las listas en Listify Market?")}
        </Text>
        <Text style={styles.text}>
          {t(
            "Puedes crear todas las listas que consideres necesarias para gestionar tus productos de manera eficiente y organizada. A su vez puedes editar tus listas y manejar su contenido a tu gusto."
          )}
        </Text>
        <Text style={styles.text_title}>
          {t("¿Cómo puedo crear una lista en Listify Market?")}
        </Text>
        <Text style={styles.text}>
          {t(
            "Para crear una lista nos vamos a la pantalla de Inicio, luego de abrir el menú, te vas a mis listas, a continuación en pantalla se mostrará un botón para crear tu nueva lista. Al darle click se abrirá la pantalla para la creación de listas, pondrás el nombre de la lista y la descripción cabe destacar que la descripción es opcional sin embargo el nombre es obligatorio. Una vez puesto el nombre, solo falta darle click en agregar y listo! Has creado tu nueva lista."
          )}
        </Text>
        <Text style={styles.text_title}>
          {t("¿Cómo puedo editar una lista en Listify Market?")}
        </Text>
        <Text style={styles.text}>
          {t(
            "Para editar una lista nos vamos a la pantalla de Inicio, luego de abrir el menú, te vas a mis listas, a continuación en pantalla se mostrarán tus listas, seleccione el botón de la lista que quieras editar y escoja la opción de editar. Al darle click se abrirá la pantalla para la edición de listas, pondrás el nuevo nombre de la lista y la nueva descripción, Una vez puesto el nombre, solo falta darle click en agregar y listo! Has editado tu lista."
          )}
        </Text>
        <Text style={styles.text_title}>
          {t("¿Cómo puedo eliminar una lista en Listify Market?")}
        </Text>
        <Text style={styles.text}>
          {t(
            "Para eliminar una lista nos vamos a la pantalla de Inicio, luego de abrir el menú, te vas a mis listas, a continuación en pantalla se mostrarán tus listas, seleccione el botón de la lista que quieras eliminar y escoja la opción de eliminar. Recuerde que al seleccionar esta opción la lista que está seleccionado se eliminará y si esta tiene productos estos no podrán ser recuperados y tendrá que agregarlos en una nueva lista."
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
