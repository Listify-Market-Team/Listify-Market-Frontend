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
import axios from "axios";
import { API_URL } from "../api/constants";
import { API } from "../api/constants";
import searchIcon from "../img/magnifier.png";

const SearchBar = (props) => {
  const entity = props.entity
  const searchList = (text) => props.searchList(text)
  const fetchList = () => props.fetchList()

  const [text, setText] = useState('')

  const handleInput = (newText) => {
    setText(newText)
  }

  const searchCondition = () => {
    
    if(text == ""){
      fetchList()
    }

    if(entity == "List" && text != "")
    {
      searchList(text)
    }
    //console.log(text)
  }



  return (
    <View style={styles.container}>
      <TextInput
      onChangeText={newText => handleInput(newText)}
      onSubmitEditing={searchCondition}
      value={text}
      style={styles.textInput} />

      <TouchableOpacity
      onPress={searchCondition}
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
