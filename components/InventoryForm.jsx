import { useState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { useTranslation } from "react-i18next";
import { colors } from "../styles/globals";

export default function InventoryForm({ onSubmit, defaultValues, loading }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { t } = useTranslation();

  const changeNameHandler = (value) => {
    setName(value);
  };

  const changeDescriptionHandler = (value) => {
    setDescription(value);
  };

  const btnText = !defaultValues ? t("Agregar") : t("Guardar cambios");

  useEffect(() => {
    if (!defaultValues) {
      return;
    }
    setName(defaultValues.name);
    setDescription(defaultValues.description);
  }, []);

  const submit = () => {
    if (name.trim() === "") {
      return;
    }
    onSubmit({ name, description });
  };
  return (
    <View style={styles.container}>
      <Input
        value={name}
        onChangeText={changeNameHandler}
        style={[styles.input, styles.spacing]}
        label={t("Nombre")}
        labelStyle={styles.label}
      />
      <Input
        value={description}
        onChangeText={changeDescriptionHandler}
        style={styles.input}
        label={t("Descripción")}
        labelStyle={styles.label}
        multiline
        numberOfLines={6}
      />
      <View style={styles.btn}>
        <Button onPress={submit}>
          {!loading ? btnText : <ActivityIndicator color="#fff" size="small" />}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontFamily: "Cabin-Regular",
    color: colors.dark,
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
  },
  spacing: {
    marginBottom: 24,
  },
  btn: {
    marginTop: "auto",
    marginBottom: 100,
  },
});
