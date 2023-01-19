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
  const [selectedFilter, setSeletedFilter] = useState("Todos");
  const [image, setImage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1) //Product's pagination

  const pageSize = 15; //amount of products it will fetch each call.

  const fetchProducts = async () => {
    let baseProducts = products;
    setIsLoadingProducts(true);

    try {
      const res = await axios.get(`${API_URL}/Product/GetAll?PageNumber=${currentPage}&PageSize=${pageSize}`);
      const data = await res.data.data;

      let newProducts = [];
      if(products.length > 0){
        for(let product of data){
          if (!products.some(p => p.id === product.id))
            newProducts.push(product);
        }
      } else {
        newProducts = data;
      }

      setProducts([...products, ...newProducts]);
      setIsLoadingProducts(false);

      //fetching image:
      let productsWithImg = [];
      for(let product of newProducts){
        product.image = await getProductImage(product.id);
        productsWithImg.push(product);
      }
      
      setProducts([...baseProducts, ...productsWithImg]);
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

  const renderLoader = () => {
    return (
      <View style={styles.loaderStyles}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    )
  }

  const renderItem = ({item}) => {
    return(
      <Pressable
        style={styles.productCard}
        key={item.id}
        onPress={() => goToProductDetail(item)}
      >
        {
          image &&
          (
            <Image style={styles.image} source={{ uri: `data:image/jpeg;base64,${item.image}` }} />
          )
        }
        <View>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </Pressable>
    )
  }

  const fetchMoreProducts = () => {
    setCurrentPage(currentPage + 1);
    fetchProducts();
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
        <FlatList 
         data={products} 
         renderItem={renderItem} 
         keyExtractor={item => item.id}
         ListFooterComponent={renderLoader} 
         onEndReached={fetchMoreProducts} 
         onEndReachedThreshold={3}/>
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
  loaderStyles: {
    marginVertical: 16,
    alignItems: 'center'
  }
});
