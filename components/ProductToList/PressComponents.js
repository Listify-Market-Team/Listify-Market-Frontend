import React from "react";
import {View, TouchableHighlight, StyleSheet, Text, Pressable} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const IconBack = () => {
  return(
    <TouchableHighlight
      onPress={() => {/*navigation.dispatch(DrawerActions.openDrawer());*/}}>
      <View>
        <Ionicons style={styles.Icon} name="arrow-back" size={40} color="black"/>
      </View>
    </TouchableHighlight>
  );
};

export const AddProductButton = (props) => {
  const array = [];
  const results = () =>{
    props.data.map((d,index1) =>{
      props.datacheck.map((c, index2) =>{
        if (index1 == index2 && c === true) 
        {
          array.push(d.name);
        }
      });
    });

    console.log(array);

    if (array.length == 0) {
      alert("Seleccione algo");
    }else{
      alert(array);
    }
  };

  return(
    <Pressable 
      style={styles.button} 
      onPress={results}>
      <Text style={styles.text}>Add Product</Text>
    </Pressable>
  );
};
  
const styles = StyleSheet.create({
  text:{
    fontSize: 15,
    alignContent: "center",
    fontWeight: "bold",
  },
  Icon:{
    padding: 15,
  },
  text:{
    fontSize: 15,
    alignContent: "center",
    fontWeight: "bold"
  },
  button: {
    alignItems: "center",
    marginTop: 30,
    paddingVertical: 10,
    borderWidth: 3,
    borderColor: "#B8B9BB",
    borderRadius: 15,
    backgroundColor: "#76B2B2",
  },  
});