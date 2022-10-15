import { Pressable, Text } from "react-native";

export default function AppButton({ text, onPress, btnStyle, textStyle }) {
  return (
    <Pressable onPress={onPress} style={btnStyle}>
      <Text style={textStyle}>{text}</Text>
    </Pressable>
  );
}
