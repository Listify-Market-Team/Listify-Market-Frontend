import React from "react";
import {StyleSheet, Text, View, Image } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

export default function Menu(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/LogoProyecto2.8.png')}/>
      <Text style={styles.title}>TestUser</Text>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  logo: {
    width: 130,
    height: 130,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20
  },
  title:{
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  }
});