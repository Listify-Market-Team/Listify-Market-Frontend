import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Pressable,
} from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import AppButton from "../components/AppButton";

const SearchProductScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const doGetRequest = async () => {
      const res = await axios.get("http://localhost:5209/api/Product/GetAll");
      const data = await res.data.products;

      setProducts(data);
    };
    const unsubscribe = navigation.addListener("focus", () => {
      doGetRequest();
    });
    return unsubscribe;
  }, [navigation]);

  const goToProductDetail = (id) => {
    try {
      axios
        .get("http://localhost:5209/api/Product/GetById", { params: { id } })
        .then((res) => {
          const product = res.data;
          navigation.navigate("ProductInfo", {
            id,
            name: product.name,
            price: product.price,
          });
        });
    } catch (error) {
      console.log("something went wrong");
    }
  };

  return (
    <View style={styles.SearchProduct}>
      <ImageBackground
        source={require("../resources/sirena.jpeg")}
        style={styles.background_image}
      >
        <Text style={styles.text}>Productos</Text>
      </ImageBackground>

      <View style={styles.filters}>
        <Text>Sugeridos</Text>
        <Text>Precio más bajos</Text>
        <Text>Precios más altos</Text>
      </View>

      {/*Product cards */}
      <ScrollView>
        {products.length === 0 && <Text>No hay productos para mostrar</Text>}
        {products.length > 0 && (
          <View style={styles.products}>
            {products.map((product) => {
              return (
                <Pressable
                  style={styles.product_card}
                  key={product.id}
                  onPress={() => goToProductDetail(product.id)}
                >
                  <Image
                    style={styles.product_card_image}
                    source={{ uri: product.image }}
                  />
                  <View>
                    <Text>{product.name}</Text>
                    <Text>Precio: {product.price}</Text>
                  </View>
                </Pressable>
              );
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  SearchProduct: {
    backgroundColor: "#B5D3D3",
    flex: 1,
    justifyContent: "start",
  },
  background_image: {
    marginTop: 50,
    height: 200,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    width: "80%",
    marginLeft: 40,
    backgroundColor: "#1E7BA9",
  },
  filters: {
    backgroundColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 40,
  },
  product_card: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "100%",
    padding: 20,
    borderRadius: 4,
  },
  product_card_image: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  products: {
    marginTop: 24,
    gap: 16,
    paddingHorizontal: 10,
  },
});

export default SearchProductScreen;
