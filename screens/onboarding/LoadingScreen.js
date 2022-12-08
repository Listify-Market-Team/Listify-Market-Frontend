import { Image, StyleSheet } from "react-native";
import GradientBackground from "../../components/GradientBackground";
import Box from "../../components/Box";

export default function LoadingScreen({ show }) {
  return (
    <GradientBackground
      style={[styles.container, { display: show ? "flex" : "none" }]}
    >
      <Box>
        <Image
          source={require("../../assets/LogoProyecto2.8.png")}
          style={styles.image}
        />
      </Box>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 99,
    width: "100%",
    height: "100%",
  },
  image: {
    width: 200,
    height: 200,
  },
});
