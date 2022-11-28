//import i18next from "i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//import i18nextReactNative from "i18next-react-native-language-detector";
import en from "./en.json";
import es from "./es.json";

import { NativeModules, Platform } from "react-native";

// const deviceLanguage =
//   Platform.OS === "ios"
//     ? NativeModules.SettingsManager.settings.AppleLocale ||
//       NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
//     : NativeModules.I18nManager.localeIdentifier;

// console.log(deviceLanguage); //en_US

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "es",
  resources: {
    en: en,
    es: es,
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
