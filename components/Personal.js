import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useForm } from "react-hook-form";
import AuthContainer from "./AuthContainer";
import LoginInput from "../components/LoginInput";
import { phoneRegex } from "../api/constants";
import Button from "./Button";
import { colors } from "../styles/globals";

import { useTranslation } from "react-i18next";

export default function Personal(props) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      phoneNumber: "",
    },
  });
  const { t } = useTranslation();

  const submit = (data) => {
    props.navigate("Register", {
      name: data.name,
      phoneNumber: data.phoneNumber,
    });
  };

  const title = t("Creación de cuenta");

  return (
    <React.Fragment>
      <AuthContainer>
        <Text style={styles.title}>{title}</Text>
        <LoginInput
          control={control}
          name="name"
          placeholder={t("Nombre")}
          type={"name"}
          rules={{ required: t("El nombre es requerido") }}
        />
        <LoginInput
          control={control}
          name="phoneNumber"
          placeholder={t("Teléfono")}
          type={"telephoneNumber"}
          rules={{
            required: t("El teléfono es requerido"),
            pattern: { value: phoneRegex, message: t("Teléfono inválido") },
          }}
        />
        <View style={styles.actions}>
          <View style={styles.btn}>
            <Pressable
              onPress={() => {
                props.goBack();
              }}
              style={[styles.btn, styles.backBtn]}
            >
              <Text style={styles.backBtnText}>{t("Volver")}</Text>
            </Pressable>
          </View>
          <View style={styles.btn}>
            <Button
              onPress={handleSubmit(submit)}
              style={[styles.btn, styles.nextBtn]}
            >
              <Text>{t("Siguiente")}</Text>
            </Button>
          </View>
        </View>
      </AuthContainer>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
    fontWeight: 700,
    marginTop: 50,
  },
  actions: {
    marginTop: 100,
    paddingHorizontal: 50,
    flexDirection: "row",
  },
  btn: {
    flex: 1,
  },
  backBtn: {
    marginRight: 40,
    backgroundColor: "transparent",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  backBtnText: {
    fontWeight: 500,
    color: "#ffffff",
    textAlign: "center",
  },
  nextBtn: {
    width: "auto",
  },
});
