import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { useForm } from "react-hook-form";
import AuthContainer from "./AuthContainer";
import LoginInput from "../components/LoginInput";
import { phoneRegex } from "../api/constants";
import { deviceHeight, deviceWidth } from "../api/constants";

export default function Personal(props) {
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
      <AuthContainer title={"Creación de cuenta"}>
        <LoginInput
          control={control}
          name="name"
          placeholder="Nombre"
          type={"name"}
          rules={{ required: "El nombre es requerido" }}
        />
        <LoginInput
          control={control}
          name="phoneNumber"
          placeholder="Teléfono"
          type={"telephoneNumber"}
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
      </AuthContainer>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
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