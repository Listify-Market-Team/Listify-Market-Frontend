import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native";
import SearchBar from "../components/SearchBar";
import List from "../components/List";
import useFetch from "../Hooks/useFetch";
import { useTranslation } from "react-i18next";

const ListMainScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();

  return (
    <View style={styles.screen}>
      <View style={styles.searchBarContainer}>
        <SearchBar style={styles.searchBar} />
      </View>

      <View style={styles.container}>
        <View style={styles.buttonTituleContainer}>
          <Text style={styles.titule}>{t("Mis Listas")}</Text>
          <TouchableOpacity
            style={styles.addNewBoton}
            onPress={() => {
              navigation.navigate("NewList");
            }}
          >
            <Text>{t("Nueva Lista")}</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.listContainer}>
          <List navigation={navigation}/>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, // investigar
    backgroundColor: "#b5d3d2",
  },
  searchBarContainer: {
    width: "100%",
    marginTop: 30,
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
    justifyContent: "space-between",
  },
  titule: {
    fontSize: 30,
    fontWeight: "bold",
  },
  listContainer: {
    marginTop: 15,
  },
  addNewBoton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#b5b7b7",
    padding: "5%",
    borderRadius: 15,
    width: "40%",
  },
});

export default ListMainScreen;
