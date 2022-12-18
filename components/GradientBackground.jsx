import { LinearGradient } from "expo-linear-gradient";

export default function GradientBackground({ children, style }) {
  return (
    <LinearGradient
      style={style}
      colors={["#024059", "#04BF8A"]}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
    >
      {children}
    </LinearGradient>
  );
}
