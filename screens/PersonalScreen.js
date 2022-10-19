import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LoginInput from "../components/LoginInput";
import { phoneRegex } from "../api/constants";
import { deviceHeight, deviceWidth } from "../api/constants";

function Personal(props) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      phoneNumber: "",
    },
  });

  const submit = (data) => {
    props.navigate("Register", {
      name: data.name,
      phoneNumber: data.phoneNumber,
    });
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
            name="name"
            placeholder="Nombre"
            rules={{ required: "El nombre es requerido" }}
          />
          <LoginInput
            control={control}
            name="phoneNumber"
            placeholder="Teléfono"
            rules={{
              required: "El teléfono es requerido",
              pattern: { value: phoneRegex, message: "Teléfono inválido" },
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
              <Text style={styles.login_text}>Siguiente</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </React.Fragment>
  );
}

export default function PersonalScreen({ navigation: { navigate, goBack } }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.view}
    >
      <Personal navigate={navigate} goBack={goBack} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    width: deviceWidth,
    height: deviceHeight,
  },
  image: {
    width: deviceWidth,
    height: deviceHeight,
  },
  logo: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginBottom: deviceHeight * 0.04,
  },
  title: {
    color: "#FFF",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: deviceHeight * 0.04,
    marginBottom: deviceHeight * 0.04,
    textDecorationLine: "underline",
  },
  login: {
    marginRight: deviceWidth * 0.05,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#C7C0C0",
    backgroundColor: "#76B2B2",
    width: deviceWidth * 0.35,
  },
  login_text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  buttons: {
    marginTop: deviceHeight * 0.15,
    marginBottom: deviceHeight * 0.1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  back: {
    marginLeft: deviceWidth * 0.05,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#C7C0C0",
    backgroundColor: "#FFF",
    width: deviceWidth * 0.35,
  },
  back_text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#024059",
  },
});
