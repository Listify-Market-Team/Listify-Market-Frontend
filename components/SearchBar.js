import { StatusBar } from "expo-status-bar";
import React, { useState} from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import searchIcon from "../img/magnifier.png";

const SearchBar = () => {
  const [text, setText] = useState('')

  const handleInput = (newText) => {
    setText(newText)
  }

  const search = () => {
    console.log(text)
  }

  return (
    <View style={styles.container}>
      <TextInput
      onChangeText={newText => handleInput(newText)}
      onSubmitEditing={search}
      value={text}
      style={styles.textInput} />

      <TouchableOpacity
      onPress={search}
       style={styles.searchButton} activeOpacity={0.5}>
        <Image source={searchIcon} style={styles.buttonImageIconStyle} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 15,
    backgroundColor: "#d9e8e9",
    width: "80%",
  },
  textInput: {
    width: "100%",
    borderRadius: 15,
    padding: 4,
    fontSize: 15,
    backgroundColor: "#d9e8e9",
  },
  searchButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00d36e",
    borderRadius: 15,
  },
  buttonImageIconStyle: {
    margin: 3,
    height: 19,
    width: 19,
    resizeMode: "stretch",
  },
});

export default SearchBar;
