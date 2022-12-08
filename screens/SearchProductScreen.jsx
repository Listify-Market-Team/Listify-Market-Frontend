import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Pressable,
  FlatList
} from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../api/constants";
import { useTranslation } from "react-i18next";
import Filter from '../components/Filter';

const SearchProductScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const { t, i18n } = useTranslation();
  const [markets, setMarkets] = useState([
    {
      name: "Bravo"
    },
    {
      name: "La Sirena"
    },
    {
      name: "Jumbo"
    },
    {
      name: "Nacional"
    }
  ]);


  useEffect(() => {
    const doGetRequest = async () => {
      const res = await axios.get(`${API_URL}/Product/GetAll`);
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
        .get(`${API_URL}/Product/GetById`, { params: { id } })
        .then((res) => {
          const product = res.data;
          navigation.navigate("ProductInfo", {
            product
          });
        });
    } catch (error) {
      console.log("something went wrong");
    }
  };

  const filtByMarket = (marketName) => {

    try {
      axios({
        method: "get",
        url: `${API_URL}/Product/GetProductsByMarketName?marketName=${marketName}`,
        
      }).then((res) => {
        //console.log(marketName);
        // console.log(res.data.products)
        setProducts(res.data.products)
      });
    } catch (error) {
      console.log("something went wrong");
    }
    
  }

  const renderFilters = ({item}) => {
    return(
    <Filter name={item.name} 
    filtByMarket={filtByMarket}
    />
    )
  };

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View style={styles.SearchProduct}>
      <ImageBackground
        source={require("../resources/sirena.jpeg")}
        style={styles.background_image}
      >
        <Text style={styles.text}>{t("Productos")}</Text>
      </ImageBackground>

      <View style={styles.filters}>
      <FlatList
      style={styles.listFilter}
      data={markets}
      horizontal 
      renderItem={renderFilters}
      extraData={markets}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={renderSeparator}
      />
      </View>

      {/*Product cards */}
      <ScrollView>
        {products.length === 0 && (
          <Text>{t("No hay productos para mostrar")}</Text>
        )}
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
  listFilter: {
    marginLeft:10
  },
  separator: {
    width: 7,
  },
});

export default SearchProductScreen;
