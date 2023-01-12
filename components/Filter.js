import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../styles/globals";

const Filter = (props) => {
  var [isPress, setIsPress] = React.useState(false);
  const [name, setName] = useState(props.name);
  const { selected } = props;

  const filtMarket = (marketName) => props.filtByMarket(marketName);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        selected
          ? { borderColor: colors.green, backgroundColor: "#fff" }
          : null,
      ]}
      onPress={() => filtMarket(name)}
    >
      <Text style={[styles.name, selected ? { color: colors.green } : null]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    //shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    //end shadow

    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 20,
  },
  name: {
    fontFamily: "Roboto",
  },
});
