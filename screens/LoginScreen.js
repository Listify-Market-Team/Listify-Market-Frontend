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

function Login(props) {
  const [userField, setUserField] = React.useState("");
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
        <Text style={styles.title}>Login to your account</Text>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={setUserField}
            value={userField}
            placeholder="Phone Number or Email"
            placeholderTextColor={"#FFF"}
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            placeholderTextColor={"#FFF"}
            secureTextEntry={true}
          />
        </SafeAreaView>
        <Pressable
          onPress={() => {
            console.log(`User: ${userField}, Password: ${password}`);
          }}
          style={styles.login}
        >
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

export default function LoginScreen({ navigation: { navigate }}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={styles.view}
    >
      <Login navigate={navigate}/>
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
  input: {
    height: 40,
    marginTop: 60,
    marginRight: 40,
    marginLeft: 40,
    borderBottomWidth: 3,
    borderColor: "#FFF",
    color: "#FFF",
    fontSize: 12,
    padding: 10,
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
