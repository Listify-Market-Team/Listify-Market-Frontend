import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { globalStyles } from "../styles/globals";
import SearchBar from "../components/SearchBar";
import { useTranslation } from "react-i18next";

export default function HomeScreen({ navigation }) {
  const { t } = useTranslation();

  const search = (productName, isEmpty) => {
    if (isEmpty) {
      return;
    }
    navigation.navigate("ProductsDashboard", { term: productName });
  };

  // for the search-bar
  const placeholder = t("Buscar productos...");

  return (
    <View style={globalStyles.view}>
      <SearchBar onSearch={search} placeholder={placeholder} />
    </View>
  );
}

// const styles = StyleSheet.create({});
