import { StyleSheet, TextInput, View, Text } from "react-native";
import { Controller } from "react-hook-form";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
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
            {error && (
              <View style={styles.error}>
                <Ionicons name="warning-outline" size={16} color="red" />
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
    fontSize: 12,
    padding: 10,
  },
  error: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  errorText: {
    marginLeft: 3,
    color: "red",
    fontSize: 13,
    fontWeight: "650",
  },
});
