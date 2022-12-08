import { useEffect, useState, useContext } from "react";
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
import { API_URL } from "../api/constants";
import useFetch from "../Hooks/useFetch";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const ListMainScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();

  const [list, setList] = useState([])
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchList();
    });
    return unsubscribe;
  }, [navigation]);

  const fetchList = async () => {
    try {
      const res = await fetch(
        `${API_URL}/Inventory/GetByUserId?userID=${user.id}`
      );
      const json = await res.json();
      const listResult = json.inventories;
      setList(listResult);
      console.log(listResult);
    } catch (error) {
      console.log(error);
    }
  };

  const renderLists = ({ item }) => {
    return (
      <List item = {item} navigation={navigation}/>
    );
  };

  const searchList = (filterList) => {
    try {
      axios
        .get(`${API_URL}/Inventory/GetInventoryLikeName?inventoryName=${filterList}&userId=${user.id}`)
        .then(async (res) => { 
          console.log(res.data);
          const json = await res.data;
          const lists = json.inventories;
          setList(lists);
        });
    } catch (error) {
      console.log("something went wrong");
    }
  }



  return (
    <View style={styles.screen}>
      <View style={styles.searchBarContainer}>
        <SearchBar entity={"List"}  fetchList={fetchList} searchList={searchList} style={styles.searchBar} />
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

        {list.length === 0 
       ? <Text>No hay listas para mostrar</Text>
       :<FlatList
          style={styles.listContainer}
          showsVerticalScrollIndicator={false}
          data={list}
          renderItem={renderLists}
          extraData={list}
          keyExtractor={(items, index) => index.toString()}
        />
          }

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
