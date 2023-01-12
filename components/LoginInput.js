import { StyleSheet, TextInput, View, Text, Keyboard } from "react-native";
import { Controller } from "react-hook-form";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
export default function LoginInput({
  control,
  type,
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
              textContentType={type}
              placeholder={placeholder}
              placeholderTextColor={"#FFF"}
              secureTextEntry={secureTextEntry}
            />
            {error && (
              <View style={styles.error}>
                <Ionicons name="warning-outline" size={16} color="yellow" />
                <Text style={styles.errorText}>{error.message}</Text>
              </View>
            )}
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
    fontSize: 18,
    padding: 10,
    fontFamily: "Roboto",
  },
  error: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  errorText: {
    marginLeft: 8,
    color: "yellow",
    fontSize: 16,
    fontWeight: "650",
    fontFamily: "Roboto",
  },
});
