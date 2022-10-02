import { View, Text, TextInput } from "react-native";

export default function Input(props) {
  const { label, ...inputProps } = props;
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...inputProps} />
    </View>
  );
}
