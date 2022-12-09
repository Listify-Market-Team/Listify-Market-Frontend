import { useRef, useEffect, useContext, useState } from "react";
import { Image, StyleSheet, Animated } from "react-native";

import GradientBackground from "../../components/GradientBackground";
import Box from "../../components/Box";
import { AppContext } from "../../context/AppContext";

export default function LoadingView() {
  const { isAppLoading } = useContext(AppContext);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [display, setDisplay] = useState(true);

  const fadeOut = () => {
    return new Promise((resolve) => {
      const timing = 250;
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: timing,
        useNativeDriver: false,
      }).start();
      setTimeout(() => resolve(""), timing);
    });
  };

  useEffect(() => {
    if (!isAppLoading) {
      fadeOut().then(() => {
        setDisplay(false);
      });
    }
  }, [isAppLoading]);

  return (
    <>
      {display && (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
          <GradientBackground style={styles.backgroundContainer}>
            <Box>
              <Image
                source={require("../../assets/LogoProyecto2.8.png")}
                style={styles.image}
              />
            </Box>
          </GradientBackground>
        </Animated.View>
      )}
    </>
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
  backgroundContainer: {
    flex: 1,
  },
});
