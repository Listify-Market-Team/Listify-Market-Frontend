import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import ProductList from "../ProductList";

const someProducts = [
  { id: "1", name: "Egg", price: 10 },
  { id: "2", name: "Milk", price: 20 },
  { id: "3", name: "Rice", price: 4.5 },
];

export default function ProductsListSelection({ products, setProducts }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(someProducts);
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <View>
      {isLoading ? (
        <Text>Cargando...</Text>
      ) : (
        <ProductList products={products} />
      )}
    </View>
  );
}
