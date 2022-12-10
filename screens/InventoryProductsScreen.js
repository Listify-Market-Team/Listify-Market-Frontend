import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { useIsFocused } from "@react-navigation/native";
import { API_URL } from "../api/constants";

const InventoryProductsScreen = ({ navigation, route }) => {
  const isFocused = useIsFocused();

  const [inventory, setInventory] = useState({});
  const [products, setProducts] = useState([]);

  const fetchInventory = async () => {
    try {
      const res = await fetch(
        `${API_URL}/Product/GetProductsByInventoryID?inventoryID=${route.params.id}`
      );
      if (res.status !== 200) {
        return;
      }

      const data = await res.json();
      setInventory(data);
      setProducts(data.products);
    } catch (error) {
      console.log("Error loading inventory with id" + route.params.id);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, [isFocused]);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.titule}>{inventory.name}</Text>
      </View>
      <ScrollView style={styles.container}>
        {products.map((product, i) => (
          <View style={styles.productContainer} key={i}>
            <Image
              source="https://cdn2.iconfinder.com/data/icons/e-commerce-line-4-1/1024/open_box4-512.png"
              style={styles.imageStyle}
            />
            <View style={styles.tituleContainer}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text>{product.price}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default InventoryProductsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1, // investigar
    backgroundColor: "#b5d3d2",
  },
  header: {
    backgroundColor: "#559e9f",
    justifyContent: "center",
    alignItems: "center",
  },
  titule: {
    margin: 30,
    fontSize: 30,
    color: "white",
  },
  container: {
    marginTop: 20,
    paddingTop: "7%",
    paddingHorizontal: "6%",
    width: "100%",
    height: "100%",
    backgroundColor: "#dae8e9",
  },
  productContainer: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 14,
    justifyContent: "flex-start",
    marginBottom: 15,
    position: "relative",
    zIndex: 1,
  },
  productName: {
    marginBottom: 4,
    fontSize: 20,
    fontWeight: "bold",
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
  tituleContainer: {
    paddingLeft: "4%",
    justifyContent: "center",
  },
});
