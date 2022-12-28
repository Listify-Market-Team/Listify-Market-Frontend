import { Alert, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "./constants";
import { supabase } from "./supabase";
import axios from "axios";

async function supabaseLogin(user, password) {
  if (user.includes("@")) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: user,
      password,
    });
    if (error) {
      throw error;
    }
  }
  else {
    const { data, error } = await supabase.auth.signInWithPassword({
      phone: user,
      password,
    });
    if (error) {
      throw error;
    }
  }
}

export const login = async (user, password, setIsLoading, setUser, t) => {
  try {
    setIsLoading(true);
    await supabaseLogin(user, password);
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
      });
  } catch (error) {
    if (error.message === "Email not confirmed") {
      Platform.OS === "web"
        ? alert(t("Por favor confirma tu correo electrónico"))
        : Alert.alert(t("Inicio de sesión fallido"), t(error.message));
    } else if (error.message === "Invalid login credentials") {
      Platform.OS === "web"
        ? alert(t("Usuario o contraseña incorrectos"))
        : Alert.alert(t("Inicio de sesión fallido"), t(error.message));
    } else if (error.message === "Usuario o contraseña incorrectos") {
      Platform.OS === "web"
        ? alert(t(error.message))
        : Alert.alert(t("Inicio de sesión fallido"), t(error.message));
    } else {
      console.error(error);
    }
    setIsLoading(false);
  }
};
