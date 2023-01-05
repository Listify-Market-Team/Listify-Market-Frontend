import { View, Text, StyleSheet, Image } from "react-native";
import { useTranslation } from "react-i18next";
import Box from "../components/Box";
import { colors } from "../styles/globals";
import Button from "../components/Button";
import TranslationProvider from "../components/TranslationProvider";
import { supabase } from "../api/supabase";

async function goToNextView(navigation, email) {
  const linkClicked = false;
  const { data, error } = await supabase.auth.resetPasswordForEmail(
    email
  );
  if (error) {
    throw error;
  }
  console.log("link sent");
  console.log(data);
  // while (!linkClicked) {
  //   setTimeout(() => {
  //     supabase.auth.onAuthStateChange( async (event, session) => {
  //       if (event === "PASSWORD_RECOVERY") {
  //         linkClicked = true;
  //         navigation.navigate("PasswordReset");
  //       }
  //     });
  //     console.log("waiting for link to be clicked");
  //   }, 90000);
  // }
}

export default function EmailConfirmView(props) {
  const { t } = useTranslation();
  goToNextView(props.navigation, props.route.params.email);
  return (
    <TranslationProvider>
      <Box style={styles.view}>
        <Text style={styles.title}>{t("Correo electrónico enviado!")}</Text>
        <Image source={require("../assets/email.png")} style={styles.image} />
        <Text style={styles.text}>
          {t(
            "Te hemos enviado un correo con un enlace para reestablecer tu contraseña."
          )}
        </Text>
        <Text style={styles.text}>
          {t("Haz click en el enlace para continuar")}
        </Text>
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
    fontSize: 48,
    fontWeight: 700,
    color: colors.dark,
    marginBottom: 60,
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
});
