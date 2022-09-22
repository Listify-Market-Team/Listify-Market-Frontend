import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";

export default function HomeScreen({navigation}) {
  const [fontsLoaded] = useFonts({
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
  });
  return (
    <View style={styles.container}>
      <Button title="Go to default"onPress={() => navigation.navigate('Default')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Inter-SemiBold",
    height: '100%',
    backgroundColor: "#B5D3D3",
  },
});