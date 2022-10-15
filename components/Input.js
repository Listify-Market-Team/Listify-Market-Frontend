import { View, Text, TextInput } from "react-native";

export default function Input(props) {
  const { label, labelStyle, ...inputProps } = props;
  return (
    <View>
      <Text style={labelStyle}>{label}</Text>
      <TextInput {...inputProps} />
    </View>
  );
}
