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
import axios from "axios";

export default function RegisterScreen() {
  const [userField, setUserField] = React.useState("");
  const [confirmPassword, setconfirmPassword] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [emptyUser, setEmptyUser] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);

  const submit = () => {
    if (userField.trim() === "") {
      setEmptyUser(true);
      return;
    }
    if (password.trim() === "") {
      setEmptyPassword(true);
      return;
    }
    if (password !== confirmPassword) {
      setInvalidPassword(true);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 3000);
    // axios.post("http://api", { email: userField, password }).then(response => {
    //   if (response.status === 200) {
    //     setLoading(false);
    //     setSuccess(true);
    //   }
    // });
  };

  const closeModal = () => {
    setEmptyUser(false);
    setInvalidPassword(false);
    setSuccess(false);
    setEmptyPassword(false);
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
            <TextInput
              style={styles.input}
              onChangeText={setUserField}
              value={userField}
              placeholder="Phone Number or Email"
            />
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Password"
              placeholderTextColor={"#FFF"}
              secureTextEntry={true}
            />
            <TextInput
              style={styles.input}
              onChangeText={setconfirmPassword}
              value={confirmPassword}
              placeholder="Confirm Password"
              placeholderTextColor={"#FFF"}
              secureTextEntry={true}
            />
          </SafeAreaView>
          <View style={styles.buttons}>
            <Pressable
              onPress={() => {
                console.log("Back to Login");
              }}
              style={styles.back}
            >
              <Text style={styles.back_text}>Back</Text>
            </Pressable>
            <Pressable
              // onPress={() => {
              //   console.log(
              //     `User: ${userField}, Password: ${password}, Confirm Password: ${confirmPassword}`
              //   );
              // }}
              onPress={submit}
              style={styles.login}
            >
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
      <Modal
        style={styles.modal}
        visible={emptyUser}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>El usuario es requerido.</Text>
            <Pressable onPress={closeModal} style={styles.btn}>
              <Text style={styles.btnText}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        style={styles.modal}
        visible={emptyPassword}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>El la contraseña es requerida.</Text>
            <Pressable onPress={closeModal} style={styles.btn}>
              <Text style={styles.btnText}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  title: {
    color: "#FFF",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 10,
    marginBottom: 20,
    textDecorationLine: "underline",
  },
  input: {
    height: 40,
    marginTop: 40,
    marginRight: 40,
    marginLeft: 40,
    borderBottomWidth: 3,
    borderColor: "#FFF",
    color: "#FFF",
    fontSize: 12,
    padding: 10,
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
