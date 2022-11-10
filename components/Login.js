import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import LoginInput from "./LoginInput";
import { AuthContext } from "../context/AuthContext";
import { login } from "../api/login";
import { userRegex } from "../api/constants";

export default function Login(props) {
  const { setUser, setIsLoading } = useContext(AuthContext);
  const [errors, setErrors] = React.useState([]);
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
    <ImageBackground
      source={require("../resources/Login-Background.png")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../resources/Logo-Proyecto2-1.png")}
        />
        <SafeAreaView>
          <Text style={styles.title}>Inicia sesi&oacute;n</Text>
        </SafeAreaView>
        {errors && <Text style={styles.error}>{errors}</Text>}
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
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  image: {
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    color: "#FFF",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
    textDecorationLine: "underline",
  },
  error: {
    color: "red",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  login: {
    marginTop: 60,
    marginBottom: 50,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#C7C0C0",
    backgroundColor: "#76B2B2",
    width: "75%",
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
    marginBottom: 60,
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