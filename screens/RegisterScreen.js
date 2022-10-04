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
} from "react-native";
import React from "react";

export default function RegisterScreen() {
  const [userField, setUserField] = React.useState("");
  const [confirmPassword, setconfirmPassword] = React.useState("");
  const [password, setPassword] = React.useState("");
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
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            onChangeText={setconfirmPassword}
            value={confirmPassword}
            placeholder="Confirm Password"
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
            onPress={() => {
              console.log(
                `User: ${userField}, Password: ${password}, Confirm Password: ${confirmPassword}`
              );
            }}
            style={styles.login}
          >
            <Text style={styles.login_text}>Sign Up</Text>
          </Pressable>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footer_text}>
            By signing up i accept the terms of use and the data privacy policy
          </Text>
        </View>
      </View>
    </ImageBackground>
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
  buttons:{
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
  }
});
