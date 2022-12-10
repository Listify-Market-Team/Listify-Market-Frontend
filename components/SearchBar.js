import React, { useState } from "react";
import { StyleSheet, View, TextInput, Pressable, Image } from "react-native";
import searchIcon from "../img/magnifier.png";
import { colors } from "../styles/globals";

const SearchBar = (props) => {
  const { onSearch, placeholder } = props;

  const [text, setText] = useState("");

  const handleInput = (newText) => {
    setText(newText);
  };

  const handleSearch = () => {
    let isEmpty = false;

    if (text.trim() === "") {
      isEmpty = true;
    }

    onSearch(text, isEmpty);
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(newText) => handleInput(newText)}
        value={text}
        style={styles.textInput}
        placeholder={placeholder}
      />

      <Pressable onPress={handleSearch} style={styles.searchButton}>
        <Image source={searchIcon} style={styles.buttonImageIconStyle} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 25,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  searchButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00d36e",
    color: colors.ligthGreen,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: 50,
    height: 40,
  },
  buttonImageIconStyle: {
    height: 22,
    width: 22,
  },
});

export default SearchBar;
