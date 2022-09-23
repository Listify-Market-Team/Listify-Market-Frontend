import * as Font from "expo-font";

const useFonts = async () =>
  await Font.loadAsync({
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
  });

export default useFonts;