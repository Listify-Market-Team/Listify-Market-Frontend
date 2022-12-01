import { Alert, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "./constants";
import axios from "axios";

export const login = (user, password, setIsLoading, setUser) => {
  setIsLoading(true);
  axios
    .post(`${API_URL}/AppUsers/AuthenticateUser`, {
      user,
      password,
    })
    .then((response) => {
      let user = response.data;
      if (user.name !== null) {
        setUser(user);
        AsyncStorage.setItem("user", JSON.stringify(user));
        setIsLoading(false);
      } else {
        setIsLoading(false);
        throw new Error("Usuario o contraseña incorrectos");
      }
    })
    .catch((error) => {
      if (error.message === "Usuario o contraseña incorrectos") {
        Platform.OS === "web"
          ? alert(error.message)
          : Alert.alert("Inicio de sesión fallido", error.message);
      } else {
        console.log(error);
      }
      setIsLoading(false);
    });
};
