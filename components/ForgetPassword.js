import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useForm } from "react-hook-form";
import AuthContainer from "./AuthContainer";
import LoginInput from "./LoginInput";
import { emailRegex } from "../api/constants";
import Button from "./Button";
import { colors } from "../styles/globals";

import { useTranslation } from "react-i18next";

export default function ForgetPassword(props) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
  });
  const { t } = useTranslation();

  const submit = (data) => {
    props.navigate("PasswordConfirmation", {
      email: data.email,
    });
  };

  const title = t("Reestablecer tu cuenta");

  return (
    <React.Fragment>
      <AuthContainer>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.textContainer}>
          <Text style={styles.informationText}>
            {t(
              "Ingresa el correo electrónico con el que te registraste en Listify Market"
            )}
          </Text>
        </View>
        <LoginInput
          control={control}
          name="email"
          type={"emailAddress"}
          placeholder={t("Correo electrónico")}
          rules={{
            required: t("Correo electrónico requerido"),
            pattern: { value: emailRegex, message: t("Email inválido") },
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
              <Text style={styles.nextBtnText}>{t("Siguiente")}</Text>
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
    marginTop: 150,
    paddingHorizontal: 50,
    flexDirection: "row",
    width: "100%",
  },
  btn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backBtn: {
    marginRight: 40,
    backgroundColor: "transparent",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ffffff",
    width: "auto",
  },
  backBtnText: {
    fontWeight: 500,
    color: "#ffffff",
    textAlign: "center",
  },
  nextBtn: {
    width: "auto",
  },
  nextBtnText: {
    fontWeight: 500,
    color: "#ffffff",
    textAlign: "center",
    fontSize: 18,
  },
  textContainer: {
    paddingHorizontal: 35,
    marginTop: 30,
    width: "100%",
  },
  informationText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 300,
  },
});
