import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { useIsFocused } from "@react-navigation/native";
import { API_URL } from "../api/constants";
import { globalStyles, colors } from "../styles/globals";
import Box from "../components/Box";
import { useTranslation } from "react-i18next";
import axios from "axios";

const InventoryProductsScreen = ({ navigation, route }) => {
  const [inventory, setInventory] = useState({});
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isFocused = useIsFocused();
  const { t } = useTranslation();

  const { id, name, description } = route.params.inventory;

  const fetchInventoryProducts = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `${API_URL}/Product/GetProductsByInventoryID`,
        { params: { inventoryId: id } }
      );
      if (res.status !== 200) {
        return;
      }
      const products = res.data.products;
      setProducts(products);
      // setProducts([
      //   { name: "Product 1", price: 123.5 },
      //   { name: "Product 2", price: 123.5 },
      // ]);
      setIsLoading(false);
    } catch (error) {
      console.log("Error loading products");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setInventory({ name, description });
    fetchInventoryProducts();
  }, [isFocused]);

  return (
    <View style={styles.viewContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>{inventory.name}</Text>
      </View>
      <View style={globalStyles.view}>
        {isLoading ? (
          <Box>
            <ActivityIndicator size={50} color="#000" />
          </Box>
        ) : products.length === 0 ? (
          <Box>
            <Text style={styles.text}>
              {t("No hay productos para mostrar")}
            </Text>
          </Box>
        ) : (
          <ScrollView style={styles.container}>
            {products.map((product) => {
              const productQuantity =
                product.product_Inventories.find((i) => i.inventoryID === id)
                  .quantity || 1;

              return (
                <View style={styles.productContainer} key={product.id}>
                  <Image
                    source="https://cdn2.iconfinder.com/data/icons/e-commerce-line-4-1/1024/open_box4-512.png"
                    style={styles.imageStyle}
                  />
                  <View style={styles.content}>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text
                      style={styles.quantity}
                    >{`Cantidad: ${productQuantity}`}</Text>
                    <Text
                      style={styles.price}
                    >{`Precio: ${product.price} RD$`}</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default InventoryProductsScreen;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.green,
    height: 200,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
  },
  title: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: 36,
    textAlign: "center",
  },
  container: {
    marginTop: 20,
    width: "100%",
  },
  productContainer: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  content: {
    marginLeft: 15,
  },
  productName: {
    marginBottom: 6,
    fontSize: 18,
    fontFamily: "Roboto",
  },
  price: {
    fontFamily: "Roboto",
    marginRight: 10,
    fontSize: 18,
    color: colors.green,
  },
  quantity: {
    fontFamily: "Roboto",
    fontSize: 18,
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 16,
  },
});
