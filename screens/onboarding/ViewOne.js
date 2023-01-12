import { View, Text, StyleSheet, Image } from "react-native";
import { useTranslation } from "react-i18next";
import Box from "../../components/Box";
import { colors } from "../../styles/globals";
import Button from "../../components/Button";
import TranslationProvider from "../../components/TranslationProvider";

export default function ViewOne({ navigation }) {
  const { t } = useTranslation();

  const goToNextView = () => {
    navigation.navigate("OnboardingViewTwo");
  };

  return (
    <TranslationProvider>
      <Box style={styles.view}>
        <Text style={styles.title}>
          {t("Tu compañero de compras favorito")}
        </Text>
        <Image
          source={require("../../assets/canasta.png")}
          style={styles.image}
        />
        <Text style={styles.text}>
          {t(
            "Organiza tus compras, enlista productos, compara precios, todo en un solo lugar"
          )}
        </Text>
        <View style={styles.actions}>
          <Button onPress={goToNextView}>{t("Siguiente")}</Button>
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
    marginTop: 20,
    fontSize: 46,
    fontWeight: 700,
    color: colors.dark,
    marginBottom: 40,
    fontFamily: "Cabin-Bold",
  },
  image: { width: 330, height: 260, marginBottom: 40 },
  text: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 100,
    color: colors.dark,
    fontFamily: "Cabin-Regular",
  },
  actions: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 50,
  },
});
