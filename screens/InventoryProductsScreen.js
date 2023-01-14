import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  Pressable,
} from "react-native";
import React, { useState, useEffect, useContext, Fragment } from "react";
import { useIsFocused } from "@react-navigation/native";
import { API_URL } from "../api/constants";
import { globalStyles, colors } from "../styles/globals";
import Box from "../components/Box";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";

const Product = (props) => {
  const [removeMode, setRemoveMode] = useState();
  const { name, price, productQuantity } = props.productData;

  return (
    <Fragment>
      {!removeMode ? (
        <Fragment>
          <Image
            source="https://cdn2.iconfinder.com/data/icons/e-commerce-line-4-1/1024/open_box4-512.png"
            style={styles.imageStyle}
          />
          <View style={styles.content}>
            <Text style={styles.productName}>{name}</Text>
            <Text
              style={styles.quantity}
            >{`Cantidad: ${productQuantity}`}</Text>
            <Text style={styles.price}>{`Precio: ${price} $RD`}</Text>
          </View>
          <Pressable
            onPress={() => setRemoveMode(true)}
            style={styles.removeBtn}
          >
            <Ionicons
              name="ios-remove-circle-outline"
              size={30}
              color={colors.dark}
            />
          </Pressable>
        </Fragment>
      ) : (
        <View style={styles.removeModeContainer}>
          <Text style={styles.removeText}>
            ¿Está seguro de remover este producto de la lista?
          </Text>
          <View style={styles.removeActions}>
            <Pressable onPress={() => setRemoveMode(false)}>
              <Feather name="x" size={30} color={colors.dark} />
            </Pressable>
            <Pressable onPress={() => props.onRemove(props.productData)}>
              <AntDesign name="check" size={30} color={colors.dark} />
            </Pressable>
          </View>
        </View>
      )}
    </Fragment>
  );
};

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

  const removeProductFromInventory = async (product) => {
    setProducts((state) => state.filter((p) => p.id !== product.id));
    // make request
    try {
      await axios.delete(`${API_URL}/Inventory/DeleteProductFromInventory`, {
        data: { inventoryID: id, productID: product.id },
      });
    } catch (error) {
      console.log("Error removing product");
    }
  };

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
                  <Product
                    productData={{ ...product, productQuantity }}
                    onRemove={removeProductFromInventory}
                  />
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
    fontFamily: "Cabin-Bold",
    fontSize: 36,
    textAlign: "center",
  },
  container: {
    marginTop: 20,
    width: "100%",
  },
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    height: 100,
    overflow: "hidden",
    width: "100%",
  },
  content: {
    marginLeft: 15,
  },
  productName: {
    fontSize: 18,
    fontFamily: "Cabin-Bold",
  },
  price: {
    fontFamily: "Cabin-Bold",
    marginRight: 10,
    fontSize: 18,
    color: colors.green,
  },
  quantity: {
    fontFamily: "Cabin-Regular",
    fontSize: 18,
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
  text: {
    fontFamily: "Cabin-Regular",
    fontSize: 16,
  },
  removeBtn: {
    marginLeft: "auto",
  },
  removeModeContainer: {
    width: "100%",
  },

  removeText: {
    fontSize: 16,
    fontFamily: "Cabin-Bold",
    color: colors.dark,
    textAlign: "center",
  },
  removeActions: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 40,
  },
});
