import { Alert, Platform } from "react-native";
import { API_URL } from "./constants";
import { supabase } from "./supabase";
import 'react-native-url-polyfill/auto'
import axios from "axios";

async function supabaseRegisterEmail(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    throw error;
  }
}

async function supabaseRegisterPhone(phone, password) {
  phone = `+${phone}`;
  const { data, error } = await supabase.auth.signUp({
    phone,
    password,
  });
  if (error) {
    throw error;
  }
}

export const register = async (
  name,
  password,
  email,
  phoneNumber,
  setLoading,
  setSuccess
) => {
  try {
    setLoading(true);
    await supabaseRegisterPhone(phoneNumber, password);
    await supabaseRegisterEmail(email, password);
    axios
      .post(`${API_URL}/AppUsers/Create`, {
        name: name,
        password: password,
        email: email,
        phoneNumber: phoneNumber,
      })
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          setSuccess(true);
        }
      });
  } catch (error) {
    setLoading(false);
    setSuccess(false);
    Platform.OS === "web"
      ? alert(error.message)
      : Alert.alert("Registro fallido", error.message);
  }
};
