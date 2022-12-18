import { View, Image, StyleSheet } from "react-native";
import GradientBackground from "./GradientBackground";
import TranslationProvider from "./TranslationProvider";

export default function AuthContainer({ children }) {
  return (
    <GradientBackground style={styles.container}>
      <TranslationProvider color="#ffffff">
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/LogoProyecto2.8.png")}
          />
        </View>
        {children}
      </TranslationProvider>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginTop: 100,
  },
});
