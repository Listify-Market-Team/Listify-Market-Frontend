import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Pressable,
  FlatList,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../api/constants";
import { useTranslation } from "react-i18next";
import Filter from "../components/Filter";
import Box from "../components/Box";
import { colors, globalStyles } from "../styles/globals";

export default function ProductsScreen({ navigation, route }) {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [markets, setMarkets] = useState([]);
  const [loadingProducts, setIsLoadingProducts] = useState(true);
  const [loadingMarkets, setIsLoadingMarkets] = useState(true);
  const [selectedFilter, setSeletedFilter] = useState("");
  const [image, setImage] = useState(false);

  const fetchProducts = async () => {
    setIsLoadingProducts(true);
    try {
      const res = await axios.get(`${API_URL}/Product/GetAll`);
      const products = await res.data.products;
      console.log("products:",products);
      setProducts(products);
      setIsLoadingProducts(false);

      //fetching image:
      let productsWithImg = products;
      for(let product of products){
        console.log(product.id);
        product.image = await getProductImage(product.id);
        productsWithImg.push(product);
      }
      
      setProducts(productsWithImg);
      // let productsWithImg = products.map((prod))

      setImage(true);
    } catch (error) {
      console.log("Error fetching products: ", error);
      setIsLoadingProducts(false);
    }

  };

  useEffect(() => {
    const fetchMarkets = async () => {
      setIsLoadingMarkets(true);
      try {
        const res = await axios.get(`${API_URL}/Market/GetAll`);
        const markets = await res.data.markets;
        setMarkets([{ name: "Todos" }, ...markets]);
        setIsLoadingMarkets(false);
      } catch (error) {
        console.log("Error fetching markets");
        setIsLoadingMarkets(false);
      }
    };
    const unsubscribe = navigation.addListener("focus", () => {
      if (route.params && route.params.market) {
        if (route.params.market === "") {
          return;
        }
        filterByMarket(route.params.market);
      } else {
        fetchProducts();
      }
      fetchMarkets();
    });
    return unsubscribe;
  }, [navigation]);

  const goToProductDetail = (product) => {
    navigation.navigate("ProductInfo", {
      product,
    });
  };

  const filterByMarket = (marketName) => {
    setSeletedFilter(marketName);
    if (marketName === "Todos") {
      fetchProducts();
      return;
    }
    setIsLoadingProducts(true);
    try {
      axios({
        method: "get",
        url: `${API_URL}/Product/GetProductsByMarketName?marketName=${marketName}`,
      }).then((res) => {
        setProducts(res.data.products);
        setIsLoadingProducts(false);
      });
    } catch (error) {
      console.log("Error filtering by market");
      setIsLoadingProducts(false);
    }
  };

  const getProductImage = async (productId) => {
    try{
      let response = await axios.get(`${API_URL}/ConsumeWebApi/GetImages?productID=${productId}`);
      if (response.data === '')
        return "https://cdn-icons-png.flaticon.com/512/1548/1548682.png";

      return response.data;
    } catch(error) {
      console.log("Ha ocurrido un error: ", error);
    }
  }

  const renderFilters = ({ item }) => {
    return (
      <Filter
        name={item.name}
        filtByMarket={filterByMarket}
        selected={selectedFilter === item.name}
      />
    );
  };

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t("Productos")}</Text>
      </View>

      <View style={styles.filters}>
        {loadingMarkets ? (
          <Box>
            <ActivityIndicator size="small" color="#fff" />
          </Box>
        ) : markets.length === 0 ? (
          <Box>
            <Text>{t("No se encontraron supermercados para filtrar")}</Text>
          </Box>
        ) : (
          <FlatList
            style={styles.listFilter}
            data={markets}
            horizontal
            renderItem={renderFilters}
            extraData={markets}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={renderSeparator}
          />
        )}
      </View>

      {/*Product cards */}
      <View style={globalStyles.view}>
        {loadingProducts ? (
          <Box>
            <ActivityIndicator size={50} color="#000" />
          </Box>
        ) : products.length === 0 ? (
          <Box>
            <Text>{t("No se encontraron productos")}</Text>
          </Box>
        ) : (
          <ScrollView style={styles.products}>
            {products.map((product) => {
              return (
                <Pressable
                  style={styles.productCard}
                  key={product.id}
                  onPress={() => goToProductDetail(product)}
                >
                  {console.log("is Image", image)}
                  {console.log("image: ", product.image)}
                  {
                    image &&
                    (
                      <Image style={styles.image} source={{ uri: `data:image/jpeg;base64,${product.image}` }} />
                    )
                  }
                  <View>
                    <Text style={styles.name}>{product.name}</Text>
                    {/* <Text style={styles.price}>
                      {t("Precio")}: {product.price}
                    </Text> */}
                  </View>
                </Pressable>
              );
            })}
          </ScrollView>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.green,
  },
  title: {
    color: "#fff",
    fontFamily: "Cabin-Bold",
    fontSize: 48,
    textAlign: "center",
  },
  name: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: "Cabin-Bold",
    marginBottom: 5,
    textTransform: "capitalize",
  },
  // price: {
  //   color: colors.green,
  //   fontSize: 16,
  //   fontFamily: "Cabin-Bold",
  // },
  filters: {
    backgroundColor: colors.ligthGreen,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 45,
  },
  productCard: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    // borderBottomColor: colors.dark,
    // borderStyle: "solid",
    // borderBottomWidth: 1,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  products: {
    paddingVertical: 25,
  },
  listFilter: {
    marginLeft: 10,
  },
  separator: {
    width: 7,
  },
});
