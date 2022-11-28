import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import AuthContainer from "./AuthContainer";
import LoginInput from "./LoginInput";
import { AuthContext } from "../context/AuthContext";
import { login } from "../api/login";
import { deviceHeight, deviceWidth, userRegex } from "../api/constants";


import { useTranslation } from "react-i18next";

export default function Login(props) {
  const { setUser, setIsLoading } = useContext(AuthContext);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      user: "",
      password: "",
    },
  });
  
  const { t, i18n } = useTranslation();

  const onSubmit = (data) => {
    login(data.user, data.password, setIsLoading, setUser, t);
  };


  return (
    <AuthContainer title={t("Iniciar Sesión")}>
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
        rules={{ required: t("La contraseña es requerida") }}
      />
      <Pressable onPress={handleSubmit(onSubmit)} style={styles.login}>
        <Text style={styles.login_text}>{t("Iniciar sesión")}</Text>
      </Pressable>
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
  login: {
    marginTop: deviceHeight * 0.1,
    marginBottom: deviceHeight * 0.1,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#C7C0C0",
    backgroundColor: "#76B2B2",
    width: deviceWidth * 0.75,
  },
  login_text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  footer: {
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: deviceHeight * 0.07,
  },
  footer_text: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "600",
  },
  footer_signup: {
    marginLeft: 5,
    color: "#A1DDFF",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "600",
  },
});
