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
import { useForm } from "react-hook-form";
import LoginInput from "../components/LoginInput";

function Login(props) {
  const { control, handleSubmit, formState:{errors} } = useForm({
    defaultValues: {
      user: "",
      password: "",
    },
  });

  const userRegex = /^(?:\d{10}|\w+@\w+\.\w{2,3})$/;

  const onSubmit = (data) => console.log(data);

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
        <Text style={styles.title}>Login to your account</Text>
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
        </SafeAreaView>
        <Pressable onPress={handleSubmit(onSubmit)} style={styles.login}>
          <Text style={styles.login_text}>Log In</Text>
        </Pressable>
        <View style={styles.footer}>
          <Text style={styles.footer_text}>Dont have an account?</Text>
          <Pressable
            onPress={() => {
              props.navigate("Register");
            }}
          >
            <Text style={styles.footer_signup}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

export default function LoginScreen({ navigation: { navigate } }) {
  return (
    <KeyboardAvoidingView style={styles.view}>
      <Login navigate={navigate} />
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
    marginTop: 40,
    textDecorationLine: "underline",
  },
  login: {
    marginTop: 70,
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
    marginBottom: 50,
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
