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
  const [quantity, setCuantity] = useState();
  const [markets, setMarkets] = useState();
  const [price, setPrice] = useState(0);
  const { t } = useTranslation();

  const increase = () => {
    setCuantity((value) => value + 1);
  };
  const decrease = () => {
    setCuantity((value) => {
      if (value <= 0) {
        return value - 1;
      }
      return value;
    });
  };

  const addToInventories = (product) => {
    if (!price || quantity <= 0) {
      return;
    }
    // navigation.navigate("", { product: { ...product, quantity, price } });
  };

  const selectPrice = (value) => {
    setPrice(value);
  };

  useEffect(() => {
    if (route.params && route.params.products) {
      setProduct(route.params.product);
      setMarkets(route.params.product.product_Markets);
    }
  }, []);

  return (
    <View style={globalStyles.view}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1548/1548682.png",
            }}
          />
        </View>
        <Text style={styles.title}>{product.name}</Text>
        <View style={styles.prices}>
          <FlatList
            data={markets}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => selectPrice(item.price)}>
                  <View style={styles.price}>
                    <Text style={styles.priceText}>{item.price}</Text>
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
              <Text> - </Text>
            </Pressable>

            <Text style={styles.quantityNumber}>{quantity}</Text>

            <Pressable style={styles.quantityButton} onPress={increase}>
              <Text> + </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.actions}>
        <Button onPress={addToInventories}>{t("Agregar producto")}</Button>
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
    color: colors.green,
    padding: 14,
    marginRight: 6,
  },
  priceText: {
    fontFamily: "Cabin-Regular",
    color: colors.dark,
    fontSize: 18,
  },
  title: {
    fontSize: 36,
    fontFamily: "Cabin-Bold",
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
    backgroundColor: "#9ba9a9",
    marginTop: 16,
  },
  quantityLabel: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  quantityBtnWrapper: {
    flexDirection: "row",
  },
  quantityButton: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    fontSize: 32,
    backgroundColor: "#d1efef",
    fontWeight: "bold",
  },
  quantityNumber: {
    backgroundColor: "white",
    fontSize: 16,
    fontWeight: "bold",
    // padding: 16,
    width: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  actions: {
    marginTop: "auto",
    marginBottom: 50,
  },
});
