import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <Text>Help Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Inter-SemiBold",
    height: '100%',
    backgroundColor: "#B5D3D3",
    alignContent: 'center',
    alignItems: 'center'
  },
});