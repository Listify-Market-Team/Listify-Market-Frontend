import { LinearGradient } from "expo-linear-gradient";

export default function GradientBackground({ children, style }) {
  return (
    <LinearGradient
      style={style}
      colors={["#04BF8A", "#025940"]}
      start={{ x: 0.1, y: 0.1 }}
    >
      {children}
    </LinearGradient>
  );
}
