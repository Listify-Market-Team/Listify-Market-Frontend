import { View, Text, StyleSheet, Dimensions, FlatList, Pressable, ScrollView} from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import { PieChart, BarChart } from "react-native-chart-kit";
import axios from "axios";
import { API_URL } from "../api/constants";

//Dummy Data
const exampleData = [
  {
    id: 1,
    name: "Lista 1",
    description: "Lista de prueba",
    appUser: {
      id: 3,
      name: "rafa",
      password: "123",
      email: "lala@land.com",
      phoneNumber: "8491234567",
    },
    totalPrice: 1800,
    isFavorite: true,
    enabled: true,
    color: "#AAFF00",
    product_Inventories: [
      {
        name: "platano verde",
        productID: 1,
        price: 100,
        marketName: "Bravo",
        color: "#50C878",
      },
      {
        name: "coca-cola",
        productID: 2,
        price: 200,
        marketName: "Nacional",
        color: "#90EE90",
      },
      {
        name: "salami",
        productID: 3,
        price: 500,
        marketName: "Bravo",
        color: "#AAFF00",
      },
      {
        name: "banana",
        productID: 7,
        price: 1000,
        marketName: "Ole",
        color: "#86C8BC",
      },
    ],
  },
  {
    id: 2,
    name: "Lista 2",
    description: "Lista de prueba",
    appUser: {
      id: 5,
      name: "rafa",
      password: "123",
      email: "lala@land.com",
      phoneNumber: "8491234567",
    },
    totalPrice: 6500,
    isFavorite: true,
    enabled: true,
    color: "#AFE1AF",
    product_Inventories: [
      {
        name: "pan de agua",
        productID: 5,
        price: 3000,
        marketName: "Sirena",
        color: "#50C878",
      },
      {
        name: "lechuga romana",
        productID: 6,
        price: 2000,
        marketName: "Nacional",
        color: "#90EE90",
      },
      {
        name: "banana",
        productID: 7,
        price: 1000,
        marketName: "Sirena",
        color: "#AAFF00",
      },
      {
        name: "salami",
        productID: 3,
        price: 500,
        marketName: "Bravo",
        color: "#86C8BC",
      },
    ],
  },
  {
    id: 5,
    name: "Lista 3",
    description: "Lista de prueba",
    appUser: {
      id: 7,
      name: "rafa",
      password: "123",
      email: "lala@land.com",
      phoneNumber: "8491234567",
    },
    totalPrice: 3699,
    isFavorite: true,
    enabled: true,
    color: "#50C878",
    product_Inventories: [
      {
        name: "manzana",
        productID: 7,
        price: 1000,
        marketName: "Bravo",
        color: "#50C878",
      },
      {
        name: "frito lays",
        productID: 8,
        price: 1999,
        marketName: "Sirena",
        color: "#90EE90",
      },
      {
        name: "salami",
        productID: 3,
        price: 500,
        marketName: "Bravo",
        color: "#AAFF00",
      },
      {
        name: "coca-cola",
        productID: 2,
        price: 200,
        marketName: "Sirena",
        color: "#86C8BC",
      },
    ],
  },
];

const filteredData = {
  labels: ["lista1", "lista2", "lista3"],
  datasets: [
    {
      data: [350, 6000, 2999],
    },
  ],
};

//const screenWidth = Dimensions.get("window").width;

//The line we use to divide Flatlist items
const itemDivider = () => {
  return (
    <View
      style={{
        height: 2,
        width: "100%",
        backgroundColor: "#C0C0C0",
      }}
    />
  );
};

export default function UserDashboardScreen({navigation, route}) {
  const [totalPrice, addPrice] = useState(0);
  const [NameProducts, addNameProducts] = useState([]);
  const [CountProducts, addCountProducts] = useState([]);
  const [NameMarkets, addNameMarkets] = useState([]);
  const [CountMarkets, addCountMarkets] = useState([]);
  //To hide
  const [showExpenditure, switchExpenditure] = useState(false);
  const [showBreakdown, switchBreakdown] = useState(false);
  const [showProductRanking, switchProductRanking] = useState(false);
  const [showMarketRanking, switchMarketRanking] = useState(false);
  //To replace exampleData
  const [inventory, setInventories] = useState([]);

  const sorted_product = (item) => {
    return Object.entries(item)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4);
  };

  const AddProductsToCount = () => {
    const count = {};
    const entries = [
      ...Object.entries(inventory),
      ...Object.values(inventory).flatMap(Object.entries),
    ];
    for (const [key, value] of entries) {
      for (const productkey in value.product_Inventories) {
        const product = value.product_Inventories[productkey].name;

        if (typeof product !== "string") continue;

        if (!count[product]) {
          count[product] = 1;
          continue;
        }

        count[product] += 1;

        addToCount(totalPrice + value.product_Inventories[productkey].price);
      }
    }

    addCountProducts(Object.keys(Object.fromEntries(sorted_product(count))));
    addNameProducts(Object.values(Object.fromEntries(sorted_product(count))));
  };

  const AddMarketsToCount = () => {
    const count = {};
    const entries = [
      ...Object.entries(inventory),
      ...Object.values(inventory).flatMap(Object.entries),
    ];
    for (const [key, value] of entries) {
      for (const productkey in value.product_Inventories) {
        const product = value.product_Inventories[productkey].marketName;

        if (typeof product !== "string") continue;

        if (!count[product]) {
          count[product] = 1;
          continue;
        }

        count[product] += 1;
      }
    }

    addCountMarkets(Object.keys(Object.fromEntries(sorted_product(count))));
    addNameMarkets(Object.values(Object.fromEntries(sorted_product(count))));
  };

  const getInvetory = () => {
    try {
      const res = axios.get(`${API_URL}/Inventory/GetByUserId`, {
        params: { userId: user.id },
      });
      const inventories = res.data.inventories;
      setInventories(inventories);
      console.log(inventories);
    } catch (error) {
      console.log("Error loading inventories");
    }
  }

  useEffect(() => {
    getInvetory();
    AddProductsToCount();
    AddMarketsToCount();
  }, []);

  const addToCount = (value) => {
    addPrice((totalPrice) => totalPrice + value);
  };

  //Chart Configurations, enter your prefered colors here
  const chartConfigPieChart = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(54, 236, 127, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    useShadowColorFromDataset: false, // optional, default false
  };

  const chartConfigBarChart = {
    backgroundColor: "#00FF80",
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientTo: "#FFFFFF",
    decimalPlaces: 1,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  };

  // const addPriceToTotal(value) => {
  //     addPrice((totalPrice + value))
  // };

  const toggleExpenditure = () => {
    switchExpenditure(true);
    switchBreakdown(false);
    switchProductRanking(false);
    switchMarketRanking(false);
  }

  const toggleBreakdown = () => {
    switchExpenditure(false);
    switchBreakdown(true);
    switchProductRanking(false);
    switchMarketRanking(false);
  }

  const toggleProductRanking = () => {
    switchExpenditure(false);
    switchBreakdown(false);
    switchProductRanking(true);
    switchMarketRanking(false);
  }

  const toggleMarketRanking = () => {
    switchExpenditure(false);
    switchBreakdown(false);
    switchProductRanking(false);
    switchMarketRanking(true);
  }


  return (
    <View style={styles.base}>
      <View style={styles.totalPriceCount}>
        <Text style={styles.countText}>Total</Text>
        <Text style={styles.countText}>{totalPrice}</Text>
      </View>

      {/* <ScrollView contentContainerStyle={styles.scrollView}>*/}
        <View style={styles.container}>
            

            <ScrollView 
            horizontal={true}
            style={styles.scrollView}
            >

              <Pressable style={styles.button_text} onPress={() => toggleExpenditure()}>
                <Text style={styles.label_text}>Costos</Text>
              </Pressable>  

              <Pressable style={styles.button_text} onPress={() => toggleBreakdown()}>
                <Text style={styles.label_text}>Productos</Text>
              </Pressable>  

              <Pressable style={styles.button_text} onPress={() => toggleProductRanking()}>
                  <Text style={styles.label_text}>Product Ranking</Text>
                </Pressable>  

              <Pressable style={styles.button_text} onPress={() => toggleMarketRanking()}>
                <Text style={styles.label_text}>Market Ranking</Text>
              </Pressable>  

            </ScrollView>

            
            <View style={showExpenditure ? styles.expenditureContainer : styles.hidden}>
              <Text style={styles.expenditureText}> Costo Total</Text>
              <PieChart
                data={inventory}
                width={Dimensions.get("window").width}
                height={120}
                chartConfig={chartConfigPieChart}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
                accessor="totalPrice"
                backgroundColor="transparent"
                paddingLeft="15"
                // absolute //for the absolute number, remove if you want percentage
              />
            </View>

            
            <View style={showBreakdown ? styles.productRankContainer : styles.hidden}>
              <Text style={styles.productRankTitle}>List Breakdown</Text>
              <FlatList
                data={inventory}
                renderItem={({ item }) => {
                  return (
                    <>
                      <Text style={styles.productRankText}>{item.name}</Text>
                      <PieChart
                        data={item.product_Inventories}
                        width={Dimensions.get("window").width - 100}
                        height={120} //Aqui cambian el size del graph
                        chartConfig={chartConfigPieChart}
                        style={{
                          marginHorizontal: 4,
                          borderRadius: 16,
                        }}
                        accessor="price"
                        backgroundColor="none"
                        margin="10"
                        border="10"
                        absolute //for the absolute number remove if you want percentage
                      />
                    </>
                  );
                }}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={itemDivider}
              />
            </View>


            <View style={showProductRanking ? styles.productRankContainer : styles.hidden}>
              <Text style={styles.productRankTitle}>Productos más comprados</Text>
              <BarChart
                data={{
                  labels: CountProducts,
                  datasets: [
                    {
                      data: NameProducts,
                    },
                  ],
                }}
                width={Dimensions.get("window").width - 120}
                height={200}
                chartConfig={chartConfigBarChart}
                style={{
                  backgroundColor: "#B5D3D3",
                  padding: 10,
                  marginHorizontal: 15,
                  borderRadius: 16,
                }}
              />
            </View>


            <View style={showMarketRanking ? styles.productRankContainer : styles.hidden}>
              <Text style={styles.productRankTitle}>Supermercados mas elegido</Text>
              <BarChart
                data={{
                  labels: CountMarkets,
                  datasets: [
                    {
                      data: NameMarkets,
                    },
                  ],
                }}
                width={Dimensions.get("window").width - 100}
                height={250}
                chartConfig={chartConfigBarChart}
                style={{
                  backgroundColor: "#B5D3D3",
                  marginHorizontal: 15,
                  borderRadius: 16,
                }}
              />
            </View> 
        </View>
      {/*</ScrollView>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: "#B5D3D3",
    height: "100%",
    flex: 1,
    padding: 16
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 4,
    flexDirection: 'column',
    justifyContent: 'space-around',
    flexShrink: 1,
    alignItems: 'center'
  },
  expenditureContainer: {
    flex: 1,
  },
  productRankContainer: {
    flex: 2,
    // justifyContent: "space-around",
    // padding: 40,  
    flexShrink: 1, 
    
  },
  expenditureText: {
    fontFamily: "Cabin",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 36,
    lineHeight: 44,

    /* identical to box height */
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0B3F57",
  },
  productRankText: {
    fontFamily: "Cabin",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24,
    display: "flex",
    alignItems: "center",
    color: "#0B3F57",
    paddingTop: 20
  },
  productRankTitle: {
    fontFamily: "Cabin",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0B3F57",
    marginBottom: 20
  },
  totalPriceCount: {
    flex: 0.15,
    backgroundColor: "#00A47E",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 15,
    margin: 40,
  },
  countText: {
    fontFamily: "Cabin",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: "0em",
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
  },
  scrollView: {
    flex:1,
    flexWrap: 'wrap',
    marginTop: 10
  },
  hidden:{
    display:'none'
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B5D3D3",
    borderWidth: 2,
    borderColor: "#b5b7b7",
    padding: "5%",
    borderRadius: 15,
    width: "40%",
    padding: 20
    
  },
  button_text: {
    fontFamily: "Cabin",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'rgb(0, 164, 126)',

  },
  label_text:{
    borderRadius: 5,
    backgroundColor: 'rgb(232, 232, 232)',
    marginHorizontal: 10,
    paddingBottom: 5,
    paddingTop: 5,
    
  }
  
});
