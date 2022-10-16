import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {ListData} from "../components/ProductToList/Data";
import {IconBack} from "../components/ProductToList/PressComponents";

export const AddProduct = () => {
  return (
    <View style={styles.screen}>   
      <IconBack/>  
      
      <View style={styles.container}>

        <View style={styles.ItemsContainer}>
          <Text style={styles.title}>My Lists</Text>

          <View style={styles.ListDataContainer}> 
            <ListData/>
          </View>
        </View> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    backgroundColor: "#B5D3D3",
  },
  container:{
    flex: 1,
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: "center",
    backgroundColor: "#DAEAEA",
  },
  ItemsContainer:{
    width: "90%", 
    height: "93%",
    marginTop: "2%",
    alignContent: "center",
    //borderWidth: 1,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold"
  },
  ListDataContainer:{
    flex: 1,
  },
});

