import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LoginInput from "../components/LoginInput";
import { phoneRegex } from "../api/constants";

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
          <Text style={styles.title}>Creaci&oacute;n de cuenta</Text>
          <SafeAreaView>
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
    <KeyboardAvoidingView style={styles.view}>
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
    marginBottom: 40,
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
    width: "35%",
  },
  login_text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  buttons: {
    marginTop: 120,
    marginBottom: 100,
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
