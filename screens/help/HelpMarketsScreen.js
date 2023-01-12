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

export default function HelpMarketsScreen() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image style={styles.header_image} source={require("../../assets/LogoProyecto2.8.png")} />
          <Text style={styles.header_text}>{t("Listify Market")}</Text>
        </View>
        <Text style={styles.text_title}>
          {t("¿Qué son los mercardos en Listify Market?")}
        </Text>
        <Text style={styles.text}>
          {t("Los mercados son los lugares de donde se obtienen los productos que se muestran en Listify Market. Estos mercados son los que provee el Ministerio de Industria y Comercio de la República Dominicana.")}
        </Text>
        <Text style={styles.text_title}>
          {t("¿Qué puedes hacer con los mercados en Listify Market?")}
        </Text>
        <Text style={styles.text}>
          {t("En Listify Market puedes ver los todos los mercados en los que puedes ver los productos que se ofrece cada uno.")}
        </Text>
        <Text style={styles.text_title}>
          {t("¿Que sucede si un Supermercados no aparece en la lista de mercados?")}
        </Text>
        <Text style={styles.text}>
          {t("Si un supermercado no aparece en la lista de mercados, es porque no se ha registrado en el Ministerio de Industria y Comercio de la República Dominicana.")}
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