import { View, Text, StyleSheet } from "react-native";
import SimpleListForm from "../components/ListForm/SimpleListForm";
import { useEffect, useState } from "react";
import { API_URL } from "../api/constants";
import axios from "axios";

export default function UpdateListScreen({ navigation, route }) {
  const [loading, setLoading] = useState(false);

  // console.dir(route.params);

  const listName = "name" in route.params ? route.params.name : "";
  const listDescrpt =
    "description" in route.params ? route.params.description : "";
  const id = "id" in route.params ? route.params.id : 0;

  const sendNewList = (list) => {
    // console.log(id);
    setLoading(true);
    try {
      axios
        .put(`${API_URL}/Inventory/UpdateInventory`, {
          ...list,
          id,
          appUserId: 1,
          totalPrice: 1,
        })
        .then(() => {
          setLoading(false);
          navigation.navigate("Home");
        });
    } catch (error) {
      console.log("something went wrong!");
    }
  };

  return (
    <View style={screenStyles.base}>
      <View style={screenStyles.container}>
        <Text style={screenStyles.title}>Actualizar lista</Text>
        <SimpleListForm
          onSubmit={sendNewList}
          initialValues={{ name: listName, description: listDescrpt }}
          loading={loading}
        />
      </View>
    </View>
  );
}

UpdateListScreen.navigationOptions = {
  title: "Nueva Lista",
};

const screenStyles = StyleSheet.create({
  base: {
    backgroundColor: "#B5D3D3",
    height: "100%",
  },
  container: {
    backgroundColor: "#DAE9E9",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginTop: 24,
    alignItems: "center",
    height: "96%",
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 28,
    paddingBottom: 16,
    textTransform: "capitalize",
  },
});
