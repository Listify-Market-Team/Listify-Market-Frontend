import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LoginInput from "./LoginInput";
import { register } from "../api/register";
import { emailRegex } from "../api/constants";
import { deviceHeight, deviceWidth } from "../api/constants";

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
            <Text style={styles.title}>Creaci&oacute;n de cuenta</Text>
          </SafeAreaView>
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
          <LoginInput
            control={control}
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            secureTextEntry
            rules={{
              required: "La confirmación de la contraseña es requerida",
            }}
          />
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
        </View>
      </ImageBackground>
      <Modal
        style={styles.modal}
        visible={loading}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ActivityIndicator size="small" style={styles.spinner} />
          </View>
        </View>
      </Modal>
      <Modal
        style={styles.modal}
        visible={success}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Usuario creado exitosamente.</Text>
            <Pressable onPress={closeModal} style={styles.btn}>
              <Text style={styles.btnText}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        style={styles.modal}
        visible={invalidPassword}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Las contraseñas no coinciden.</Text>
            <Pressable onPress={closeModal} style={styles.btn}>
              <Text style={styles.btnText}>Intentar de nuevo</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </React.Fragment>
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
    width: 160,
    height: 160,
    alignSelf: "center",
  },
  title: {
    color: "#FFF",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 10,
    textDecorationLine: "underline",
  },
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
  modalContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  spinner: {
    width: "100%",
    height: "100%",
  },
  modalContent: {
    minHeight: 100,
    minWidth: 100,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#76B2B2",
    marginTop: 16,
    borderRadius: 16,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});