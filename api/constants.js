import {Dimensions} from "react-native";

export const API_URL = "https://listifym-backend.herokuapp.com/api";

export const deviceHeight = Dimensions.get("window").height;

export const deviceWidth = Dimensions.get("window").width;

export const emailRegex = /^(?:\w+@\w+\.\w{2,3})$/;

export const userRegex = /^(?:\d{10}|\w+@\w+\.\w{2,3})$/;

export const phoneRegex = /^(?:\d{10})$/;