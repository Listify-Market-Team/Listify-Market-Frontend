import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useState } from "react";
import axios from "axios";

import SimpleListForm from "../components/ListForm/SimpleListForm";

export default function NewListScreen({ navigation, route }) {
  const [loading, setLoading] = useState(false);

  const sendNewList = (list) => {
    setLoading(true);

    try {
      axios
        .post("https://listifym-backend.herokuapp.com/api/Inventory/Create", {
          name: list.name,
          description: list.description,
          appUserId: 1,
          totalPrice: 1,
        })
        .then(() => {
          setLoading(false);
          navigation.navigate("Home");
        });
    } catch (error) {
      console.log("something went wrong");
    }
  };

  return (
    <View style={screenStyles.base}>
      <View style={screenStyles.container}>
        <Text style={screenStyles.title}>Nueva lista</Text>
        <SimpleListForm onSubmit={sendNewList} loading={loading} />
      </View>
    </View>
  );
}

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
