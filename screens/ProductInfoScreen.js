import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";

import { colors, globalStyles } from "../styles/globals";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";

export default function ProductInfoScreen({ navigation, route }) {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [markets, setMarkets] = useState();
  const [price, setPrice] = useState(0);
  const { t } = useTranslation();

  // console.log(route.params.product);
  // console.log(product);
  // console.log(markets);

  const increase = () => {
    setQuantity((value) => value + 1);
  };
  const decrease = () => {
    setQuantity((value) => {
      if (value > 0) {
        return value - 1;
      }
      return value;
    });
  };

  const addToInventories = () => {
    if (!price || quantity <= 0) {
      return;
    }
    const productToAdd = { ...product, quantity, price };
    // console.log(productToAdd);
    navigation.navigate("InventoriesSelection", { product: productToAdd });
  };

  const selectPrice = (value) => {
    setPrice(value);
  };

  useEffect(() => {
    if (route.params && route.params.product) {
      setProduct(route.params.product);
      setMarkets(route.params.product.product_Markets);
    }
  }, [route]);

  return (
    <View style={globalStyles.view}>
      <View style={styles.container}>
        <Text style={styles.title}>{product.name}</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1548/1548682.png",
            }}
          />
        </View>
        <View style={styles.prices}>
          <FlatList
            data={markets}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => selectPrice(item.price)}>
                  <View style={styles.price}>
                    <Text
                      style={[
                        styles.priceText,
                        {
                          backgroundColor:
                            price === item.price
                              ? colors.ligthGreen
                              : colors.green,
                        },
                      ]}
                    >
                      {item.price}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.marketID}
            horizontal
            extraData={markets}
          />
        </View>

        <View style={styles.quantityContainer}>
          <View>
            <Text style={styles.quantityLabel}>{t("Cantidad")}</Text>
          </View>
          <View style={styles.quantityBtnWrapper}>
            <Pressable style={styles.quantityButton} onPress={decrease}>
              <Text style={styles.quantityBtnLabel}> - </Text>
            </Pressable>

            <Text style={styles.quantityNumber}>{quantity}</Text>

            <Pressable style={styles.quantityButton} onPress={increase}>
              <Text style={styles.quantityBtnLabel}> + </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.actions}>
        <Button onPress={() => addToInventories()}>
          {t("Agregar producto")}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
  },
  image: {
    display: "block",
    width: "90%",
    height: "90%",
  },
  price: {
    marginRight: 6,
    borderRadius: 10,
  },
  priceText: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontFamily: "Roboto",
    color: "#fff",
    fontSize: 18,
    borderRadius: 15,
  },
  title: {
    fontSize: 36,
    fontFamily: "Roboto",
    marginBottom: 20,
  },
  imageContainer: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  prices: {
    overflow: "visible",
  },
  quantityContainer: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderColor: colors.green,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 16,
  },
  quantityLabel: {
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "Roboto",
    color: colors.dark,
    fontSize: 24,
  },
  quantityBtnWrapper: {
    flexDirection: "row",
  },
  quantityButton: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    fontSize: 32,
    backgroundColor: colors.green,
    fontFamily: "Roboto",
    borderRadius: 10,
  },
  quantityNumber: {
    backgroundColor: "white",
    fontSize: 16,
    fontWeight: "bold",
    width: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  actions: {
    marginTop: "auto",
    marginBottom: 50,
  },
  quantityBtnLabel: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 20,
  },
});
