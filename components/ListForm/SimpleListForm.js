import { View, StyleSheet, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";

import ListDataFields from "./ListDataFields";
import AppButton from "../AppButton";
import styles from "../../styles";

export default function SimpleListForm({ onSubmit, initialValues, loading }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!initialValues) {
      return;
    }
    setName(initialValues.name);
    setDescription(initialValues.description);
  }, [initialValues]);

  const finishBtnText = !initialValues ? "guardar" : "guardar cambios";

  const changeNameHandler = (value) => setName(value);
  const changeDescriptHandler = (value) => setDescription(value);

  return (
    <View style={formStyles.container}>
      <ListDataFields
        onChangeName={changeNameHandler}
        onChangeDescription={changeDescriptHandler}
        name={name}
        description={description}
      />
      <AppButton
        text={
          loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            finishBtnText
          )
        }
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
    height: 50,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
