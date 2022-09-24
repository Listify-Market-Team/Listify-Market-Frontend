import { StatusBar } from "expo-status-bar";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import searchIcon from "../resources/1024px-Search_Icon.svg.png"

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput}  />

      <TouchableOpacity
          style={styles.searchButton}
          activeOpacity={0.5}>

          <Image
            source={searchIcon}
            style={styles.buttonImageIconStyle}
          />
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: "15px",
    backgroundColor: "#d9e8e9",
    width: "70%"
  },
  textInput: {
    fontFamily: "Verdana",
    width: "100%",
    borderRadius: "15px",
    padding: "4px",
    backgroundColor: "#d9e8e9",
  },
  searchButton: {
    alignItems: "center",
    backgroundColor: "#00d36e",
    borderWidth: 0.5,
    borderColor: "#fff",
    borderRadius: "15px",
  },
  buttonImageIconStyle: {
    margin: 3,
    height: 19,
    width: 19,
    resizeMode: 'stretch',
  },
});

export default SearchBar;