import { StyleSheet, View, Text, Image, ImageBackground, ScrollView } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";

const SearchProductScreen = () => {
  let [Products, setProducts] = useState([]);

  useEffect( ()=>{
    const doGetRequest = async () => {
      const res = await axios.get("https://localhost:7209/api/Product/GetAll");
      const data = await res.data.products;

      console.log(data);
      setProducts(data);
    };
    doGetRequest();
  }, []);

  return (
    <View style={styles.SearchProduct}>

      <ImageBackground source={require("../resources/sirena.jpeg")} style={styles.background_image } >
        <Text style={styles.text}>All Products</Text>
      </ImageBackground>

      <View style={styles.filters}>
        <Text>Suggested</Text>
        <Text>Lower Price</Text>
        <Text>Higher Price</Text>
      </View>

      {/*Product cards */}
      <ScrollView>
        {
          Products.map( (product) => {
            console.log();
            return (
              // eslint-disable-next-line react/jsx-key
              <View style={styles.product_card}>
                <Image style={styles.product_card_image} source={{uri: product.image}} />
                <View>
                  <Text>Nombre: {product.name}{"\n"} {"\n"}</Text>
                  <Text>Precio: {product.price}</Text>
                </View>
              </View>
            );
          })
        }
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
    backgroundColor: "#1E7BA9"
  },
  filters: {
    backgroundColor: "#eee",
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  product_card: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "95%",
    marginTop: 30,
    marginLeft: 10,
    padding: 20,
    borderRadius: "25%"
  },
  product_card_image: {
    width: "30%",
    height: 100,
    marginLeft: 1,
    marginRight: 20
  }
});

export default SearchProductScreen;