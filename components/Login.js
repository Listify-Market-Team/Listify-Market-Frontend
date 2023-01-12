import React, { useContext } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useForm } from "react-hook-form";
import AuthContainer from "./AuthContainer";
import LoginInput from "./LoginInput";
import { AuthContext } from "../context/AuthContext";
import { login } from "../api/login";
import { deviceHeight, deviceWidth, userRegex } from "../api/constants";
import Button from "./Button";

import { useTranslation } from "react-i18next";

export default function Login(props) {
  const { setUser, setIsLoading } = useContext(AuthContext);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      user: "",
      password: "",
    },
  });
  const { t } = useTranslation();

  const onSubmit = (data) => {
    login(data.user, data.password, setIsLoading, setUser, t);
  };

  const title = t("Iniciar sesión");

  return (
    <AuthContainer>
      <Text style={styles.title}>{title}</Text>
      <LoginInput
        control={control}
        name="user"
        placeholder={t("Correo electrónico o teléfono")}
        rules={{
          required: t("El correo electrónico o teléfono es requerido"),
          pattern: {
            value: userRegex,
            message: t("Correo electrónico o teléfono inválido"),
          },
        }}
      />
      <LoginInput
        control={control}
        name="password"
        placeholder={t("Contraseña")}
        secureTextEntry
        rules={{
          required: t("La contraseña es requerida"),
          minLength: {
            value: 6,
            message: t("La contraseña debe tener al menos 6 caracteres"),
          }
        }}
      />
      <View style={styles.forgetPassword}>
        <Text style={styles.forgetPassword_text}>{t("Olvidaste tu contraseña?")}</Text>
        <Pressable
          onPress={() => {
            props.navigate("ForgetPassword");
          }}
        >
          <Text style={styles.forgetPassword_forget}>{t("Reestablecer")}</Text>
        </Pressable>
      </View>
      <View style={styles.actions}>
        <Button onPress={handleSubmit(onSubmit)}>{title}</Button>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footer_text}>{t("¿No tienes una cuenta?")}</Text>
        <Pressable
          onPress={() => {
            props.navigate("Personal");
          }}
        >
          <Text style={styles.footer_signup}>{t("Regístrate")}</Text>
        </Pressable>
      </View>
    </AuthContainer>
  );
}

const styles = StyleSheet.create({
  footer: {
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 70,
    marginTop: "auto",
  },
  footer_text: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Cabin-Regular",
  },
  footer_signup: {
    marginLeft: 5,
    color: "#A1DDFF",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Cabin-Medium",
  },
  title: {
    color: "#fff",
    fontSize: 48,
    textAlign: "center",
    marginTop: 50,
    fontFamily: "Cabin-Bold",
  },
  actions: {
    marginTop: 60,
    paddingHorizontal: 50,
  },
  forgetPassword: {
    marginTop: 30,
    justifyContent: "center",
    flexDirection: "row",
    marginTop: "auto",
  },
  forgetPassword_text: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Cabin-Regular",
  },
  forgetPassword_forget: {
    marginLeft: 5,
    color: "#A1DDFF",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Cabin-Medium",
  }
});
