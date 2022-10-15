import { View, Text, StyleSheet } from "react-native";
import SimpleListForm from "../components/ListForm/SimpleListForm";
import { useEffect } from "react";

export default function UpdateListScreen() {
  const sendNewList = (list) => {
    console.log(list);
  };
  const listName = "My Test List"; // navigator.getParams("name");
  const listDescrpt = "This list was created for testing purposes"; //navigator.getParams("description");

  return (
    <View style={screenStyles.base}>
      <View style={screenStyles.container}>
        <Text style={screenStyles.title}>Actualizar lista</Text>
        <SimpleListForm
          onSubmit={sendNewList}
          initialValues={{ name: listName, description: listDescrpt }}
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
