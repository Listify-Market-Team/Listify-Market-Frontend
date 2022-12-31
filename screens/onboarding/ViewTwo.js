import { View, Text, StyleSheet, Image } from "react-native";
import { useTranslation } from "react-i18next";
import Box from "../../components/Box";
import { colors } from "../../styles/globals";
import Button from "../../components/Button";
import TranslationProvider from "../../components/TranslationProvider";

export default function ViewTwo({ navigation }) {
  const { t } = useTranslation();

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <TranslationProvider>
      <Box style={styles.view}>
        <Text style={styles.title}>Listify Market</Text>
        <Image
          source={require("../../assets/bolsa-listify-1.png")}
          style={styles.image}
        />
        <Text style={styles.text}>
          {t(
            "Organiza tus compras, enlista productos, compara precios, todo en un solo lugar"
          )}
        </Text>
        <View style={styles.actions}>
          <Button onPress={goToLogin}>{t("Siguiente")}</Button>
        </View>
      </Box>
    </TranslationProvider>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.light,
    paddingHorizontal: 50,
    textAlign: "center",
  },
  title: {
    fontSize: 80,
    fontWeight: 700,
    color: colors.green,
    marginBottom: 60,
    fontFamily: "Cabin-Bold",
  },
  image: { width: 330, height: 260, marginBottom: 40 },
  text: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 80,
    color: colors.dark,
    fontFamily: "Cabin-Regular",
  },
  actions: {
    width: "100%",
    paddingHorizontal: 20,
  },
});
