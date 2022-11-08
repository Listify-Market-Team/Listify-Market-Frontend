import { API_URL } from "./constants";
import axios from "axios";

export const register = (name, password, email, phoneNumber, setLoading, setSuccess) => {
  setLoading(true);
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
    })
    .catch((error) => {
      setLoading(false);
      setSuccess(false);
      alert("Error");
    });
};
