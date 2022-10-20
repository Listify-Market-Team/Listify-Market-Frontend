import { View, Text, StyleSheet, Pressable, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AuthContainer from "./AuthContainer";
import LoginInput from "./LoginInput";
import AuthModal from "./AuthModal";
import { register } from "../api/register";
import { emailRegex } from "../api/constants";
import { deviceWidth } from "../api/constants";

export default function Register(props) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const submit = (data) => {
    if (data.password !== data.confirmPassword) {
      setInvalidPassword(true);
      return;
    }
    register(
      props.data.name,
      data.password,
      data.email,
      props.data.phoneNumber,
      setLoading,
      setSuccess
    );
  };

  const closeModal = () => {
    if (success) {
      props.navigate("Login");
    } else {
      setInvalidPassword(false);
    }
    setSuccess(false);
  };

  return (
    <React.Fragment>
      <AuthContainer title={"Creación de cuenta"}>
        <LoginInput
          control={control}
          name="email"
          placeholder="Correo electrónico o teléfono"
          rules={{
            required: "Correo electrónico o teléfono is requerido",
            pattern: { value: emailRegex, message: "Invalid Email" },
          }}
        />
        <LoginInput
          control={control}
          name="password"
          placeholder="Contraseña"
          secureTextEntry
          rules={{ required: "La contraseña es requerida" }}
        />
        <SafeAreaView>
          <LoginInput
            control={control}
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            secureTextEntry
            rules={{
              required: "La confirmación de la contraseña es requerida",
            }}
          />
        </SafeAreaView>
        <View style={styles.buttons}>
          <Pressable
            onPress={() => {
              props.goBack();
            }}
            style={styles.back}
          >
            <Text style={styles.back_text}>Volver</Text>
          </Pressable>
          <Pressable onPress={handleSubmit(submit)} style={styles.login}>
            <Text style={styles.login_text}>Registrarme</Text>
          </Pressable>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footer_text}>
            Al registrarme acepto las condiciones de uso y la privacidad de
            datos política
          </Text>
        </View>
        <AuthModal
          success={success}
          loading={loading}
          invalidPassword={invalidPassword}
          closeModal={closeModal}
        />
      </AuthContainer>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  login: {
    marginRight: 15,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#C7C0C0",
    backgroundColor: "#76B2B2",
    maxWidth: deviceWidth * 0.4,
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
    marginBottom: 30,
  },
  footer_text: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  buttons: {
    marginTop: 70,
    marginBottom: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  back: {
    marginLeft: 15,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#C7C0C0",
    backgroundColor: "#FFF",
    width: "35%",
  },
  back_text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#024059",
  },
});
