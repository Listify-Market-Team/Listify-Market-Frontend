import { Dimensions } from "react-native";

export const API_URL = "https://listifym-backend.herokuapp.com/api";

export const API = "https://localhost:7209/api";

export const deviceHeight = Dimensions.get("window").height;

export const deviceWidth = Dimensions.get("window").width;

export const emailRegex = new RegExp(
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
);

export const phoneRegex = new RegExp(/^(?:\d{10})$/);

export const userRegex = new RegExp(
  emailRegex.source + "|" + phoneRegex.source
);
