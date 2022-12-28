import { Alert, Platform } from "react-native";
import { API_URL } from "./constants";
import { supabase } from "./supabase";
import axios from "axios";

async function supabaseRegister(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    throw error;
  } else {
    console.log(data);
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
    await supabaseRegister(email, password);
    setLoading(false);
    setSuccess(true);
  } catch (error) {
    console.error(error);
    setLoading(false);
  }
  // axios
  //   .post(`${API_URL}/AppUsers/Create`, {
  //     name: name,
  //     password: password,
  //     email: email,
  //     phoneNumber: phoneNumber,
  //   })
  //   .then((response) => {
  //     if (response.status === 200) {
  //       setLoading(false);
  //       setSuccess(true);
  //     }
  //   })
  //   .catch((error) => {
  //     setLoading(false);
  //     setSuccess(false);
  //     Platform.OS === "web" ? alert(error.message) : Alert.alert("Registro fallido", error.message);
  //   });
};
