import { StyleSheet, TextInput, View } from "react-native";
import { Controller } from "react-hook-form";
import React from "react";

export default function LoginInput({
  control,
  name,
  placeholder,
  secureTextEntry,
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value} }) => (
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={value}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholderTextColor={"#FFF"}
          secureTextEntry={secureTextEntry}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 60,
    marginRight: 40,
    marginLeft: 40,
    borderBottomWidth: 3,
    borderColor: "#FFF",
    color: "#FFF",
    fontSize: 12,
    padding: 10,
  },
});
