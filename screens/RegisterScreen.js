import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  Pressable,
  KeyboardAvoidingView,
  ActivityIndicator,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LoginInput from "../components/LoginInput";
import axios from "axios";

function Register(props) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      user: "",
      password: "",
      confirmPassword: ""
    },
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const userRegex = /^(?:\d{10}|\w+@\w+\.\w{2,3})$/;

  const submit = (data) => {
    if (data.password !== data.confirmPassword) {
      setInvalidPassword(true);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      console.log(data);
    }, 3000);
    // axios.post("http://api", { email: userField, password }).then(response => {
    //   if (response.status === 200) {
    //     setLoading(false);
    //     setSuccess(true);
    //   }
    // });
  };

  const closeModal = () => {
    setSuccess(false);
    setInvalidPassword(false);
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
          <Text style={styles.title}>Create your account</Text>
          <SafeAreaView>
            <LoginInput
              control={control}
              name="user"
              placeholder="Phone Number or Email"
              rules={{ required: "Phone Number or Email is required", pattern: {value: userRegex, message: "Invalid Phone Number or Email"}}}
            />
            <LoginInput
              control={control}
              name="password"
              placeholder="Password"
              secureTextEntry
              rules={{ required: "Password is required" }}
            />
            <LoginInput
              control={control}
              name="confirmPassword"
              placeholder="Confirm Password"
              secureTextEntry
              rules={{ required: "Confirm Password is required" }}
            />
          </SafeAreaView>
          <View style={styles.buttons}>
            <Pressable
              onPress={() => {
                props.goBack();
              }}
              style={styles.back}
            >
              <Text style={styles.back_text}>Back</Text>
            </Pressable>
            <Pressable onPress={handleSubmit(submit)} style={styles.login}>
              <Text style={styles.login_text}>Sign Up</Text>
            </Pressable>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footer_text}>
              By signing up i accept the terms of use and the data privacy
              policy
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

export default function RegisterScreen({ navigation: { goBack } }) {
  return (
    <KeyboardAvoidingView style={styles.view}>
      <Register goBack={goBack} />
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
