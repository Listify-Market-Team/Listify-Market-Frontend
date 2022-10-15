import { Text } from "react-native";

export default function ProductList({ products = [], selectable = false }) {
  return products.length === 0 ? (
    <Text>Lista vacía</Text>
  ) : (
    <Text>Mostrando productos</Text>
  );
}
