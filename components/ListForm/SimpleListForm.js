import { View, StyleSheet } from "react-native";
import { useState } from "react";
import ListDataFields from "./ListDataFields";
import AppButton from "../AppButton";
import styles from "../../styles";

export default function SimpleListForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const changeNameHandler = value => setName(value);
  const changeDescriptHandler = value => setDescription(value);

  return (
    <View style={formStyles.container}>
      <ListDataFields
        onChangeName={changeNameHandler}
        onChangeDescription={changeDescriptHandler}
      />
      <AppButton
        text="Guardar"
        onPress={() => onSubmit({ name, description })}
        btnStyle={{ ...formStyles.btn, ...styles.shadow }}
        textStyle={formStyles.btnText}
      />
    </View>
  );
}

const formStyles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 500,
    flex: 1,
  },
  btn: {
    backgroundColor: "#76B2B2",
    width: "100%",
    padding: 16,
    borderRadius: 8,
    textAlign: "center",
    marginTop: "auto",
    marginBottom: 16,
  },
  btnText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
  },
});
