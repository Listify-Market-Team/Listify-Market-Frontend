import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import SearchBar from "./SearchBar";
import List from "./List";

// const fetchList = async () => {
//     const res = await fetch("https://localhost:7209/api/Inventory/Getall")
//     const json = await res.json();
// console.log(json)
// }
// fetchList()

const ListMainScreen = () => {
  // useEffect(() => {
  //     fetchList()
  // }, [])
  return (
    <View style={styles.screen}>

    <View style={styles.searchBarContainer}>
    <SearchBar style={styles.searchBar}/>
    </View>

      <View style={styles.container}>

        <View style={styles.buttonTituleContainer}>
          <Text style={styles.titule}>My lists</Text>
          <TouchableOpacity style={styles.addNewBoton}>
            <Text>ADD NEW</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer}>
          <List/>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, // investigar
    backgroundColor: "#b5d3d2",
  },
  searchBarContainer:{
    width:"100%",
    marginTop:47,
    marginBottom: 30,
    alignItems: "center",
  },
  container: {
    paddingTop: "10%",
    paddingHorizontal: "6%",
    width: "100%",
    height: "100%",
    backgroundColor: "#dae8e9",
  },
  buttonTituleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
  },
  titule: {
    fontSize: 30,
    fontWeight: "bold",
  },
  listContainer:{
    marginTop: 15
  },
  addNewBoton: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#b5b7b7",
    padding: "5%",
    borderRadius: 15,
    width: "40%",
  },
});

export default ListMainScreen;
