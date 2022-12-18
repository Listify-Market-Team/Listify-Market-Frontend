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

export default function MarketsScreen({ navigation, route }) {
  const { t } = useTranslation();
  const [markets, setMarkets] = useState([]);
  const [loadingMarkets, setIsLoadingMarkets] = useState(true);

  useEffect(() => {
    const fetchMarkets = async () => {
      setIsLoadingMarkets(true);
      try {
        const res = await axios.get(`${API_URL}/Market/GetAll`);
        const markets = await res.data.markets;

        setMarkets(markets);
        setIsLoadingMarkets(false);
      } catch (error) {
        console.log("Error fetching markets");
        setIsLoadingMarkets(false);
      }
    };
    const unsubscribe = navigation.addListener("focus", () => {
      fetchMarkets();
    });
    return unsubscribe;
  }, [navigation]);

  const goToMarketProducts = (market) => {
    navigation.navigate("ProductsDashboard", {
      market: market.name,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t("Supermercados")}</Text>
      </View>

      <View style={globalStyles.view}>
        {loadingMarkets ? (
          <Box>
            <ActivityIndicator size={50} color="#000" />
          </Box>
        ) : markets.length === 0 ? (
          <Box>
            <Text>{t("No se encontraron supermercados")}</Text>
          </Box>
        ) : (
          <ScrollView style={styles.markets}>
            {markets.map((market) => {
              return (
                <Pressable
                  style={styles.marketCard}
                  key={market.id}
                  onPress={() => goToMarketProducts(market)}
                >
                  <Image style={styles.image} source={{ uri: market.image }} />
                  <View>
                    <Text style={styles.name}>{market.name}</Text>
                    <Text style={styles.rate}>
                      {market.rating + " " + t("estrellas")}
                    </Text>
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
    backgroundColor: colors.ligthGreen,
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
  rate: {
    fontFamily: "Cabin-Bold",
    color: colors.green,
    fontSize: 16,
  },
  marketCard: {
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
  markets: {
    paddingVertical: 25,
  },
});
