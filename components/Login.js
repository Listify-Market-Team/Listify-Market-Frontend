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

export default function Login(props) {
  const { setUser, setIsLoading } = useContext(AuthContext);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      user: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    login(data.user, data.password, setIsLoading, setUser);
  };

  return (
    <AuthContainer title={"Iniciar Sesión"}>
      <LoginInput
        control={control}
        name="user"
        placeholder="Correo electrónico o teléfono"
        rules={{
          required: "El correo electrónico o teléfono es requerido",
          pattern: {
            value: userRegex,
            message: "Correo electrónico o teléfono inválido",
          },
        }}
      />
      <LoginInput
        control={control}
        name="password"
        placeholder="Contraseña"
        secureTextEntry
        rules={{ required: "La contraseña es requerida" }}
      />
      <Pressable onPress={handleSubmit(onSubmit)} style={styles.login}>
        <Text style={styles.login_text}>Iniciar sesi&oacute;n</Text>
      </Pressable>
      <View style={styles.footer}>
        <Text style={styles.footer_text}>¿No tienes una cuenta?</Text>
        <Pressable
          onPress={() => {
            props.navigate("Personal");
          }}
        >
          <Text style={styles.footer_signup}>Registrate</Text>
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
