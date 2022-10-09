import { StyleSheet, Text, View } from "react-native";
import { AddProduct } from "./screens/AddProductScreen";

export default function App() {
  return (     
    <View style={styles.container}>
      <AddProduct></AddProduct>
    </View>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
