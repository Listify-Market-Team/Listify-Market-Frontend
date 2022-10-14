import { StyleSheet, TextInput, View, Text } from "react-native";
import { Controller } from "react-hook-form";
import React from "react";

export default function LoginInput({
  control,
  name,
  placeholder,
  secureTextEntry,
  rules = {},
}) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              placeholder={placeholder}
              placeholderTextColor={"#FFF"}
              secureTextEntry={secureTextEntry}
            />
            {error && <Text style={styles.error}>{error.message}</Text>}
          </View>
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginRight: 40,
    marginLeft: 40,
  },
  input: {
    height: 40,
    borderBottomWidth: 3,
    borderColor: "#FFF",
    color: "#FFF",
    fontSize: 12,
    padding: 10,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
    fontWeight: 700,
  },
});
