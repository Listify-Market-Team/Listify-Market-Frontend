import { View, StyleSheet } from "react-native";
import Input from "../Input";
import styles from "../../styles";
import { useTranslation } from "react-i18next";

export default function ListDataFields({
  onChangeName,
  onChangeDescription,
  name,
  description,
}) {
  const { t, i18n } = useTranslation();
  return (
    <View style={[fieldsStyles.card, styles.shadow]}>
      <Input
        label={t("Nombre")}
        labelStyle={fieldsStyles.label}
        onChangeText={onChangeName}
        style={[fieldsStyles.input, fieldsStyles.spacing]}
        value={name}
      />
      <Input
        label={t("Descripción")}
        labelStyle={fieldsStyles.label}
        onChangeText={onChangeDescription}
        multiline
        style={[fieldsStyles.input, fieldsStyles.textarea]}
        value={description}
      />
    </View>
  );
}

const fieldsStyles = StyleSheet.create({
  card: {
    padding: 24,
    backgroundColor: "#fff",
    shadowColor: "#ccc",
    shadowRadius: 4,
    shadowOpacity: 0.2,
    shadowOffset: 1,
    borderRadius: 4,
  },
  label: {
    fontWeight: "bold",
    color: "#569E9F",
    textTransform: "uppercase",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    backgroundColor: "transparent",
    borderColor: "#c0c0c0",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 14,
    borderRadius: 4,
  },
  textarea: {
    height: 150,
  },
  spacing: {
    marginBottom: 18,
  },
});
