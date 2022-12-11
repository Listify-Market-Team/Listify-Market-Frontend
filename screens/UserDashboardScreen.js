import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    Pressable,
    Dimensions,
    FlatList,
  } from "react-native";
  import { useTranslation } from "react-i18next";
  import { useState, useEffect } from "react";
  import { useNavigation } from "@react-navigation/native";
  import axios from "axios";
  import Box from "../components/Box";
  import { colors } from "../styles/globals";
  import { API_URL } from "../api/constants";
  import React from 'react'
  import { PieChart } from 'react-native-chart-kit';


//Dummy Data
const exampleData =[
    {
        id: 1,
        name: "Lista 1",
        description: "Lista de prueba",
        appUser: 
            {
                id: 3,
                name: "rafa",
                password: "123",
                email: "lala@land.com",
                phoneNumber: "8491234567"
             },
      totalPrice: 350,
      isFavorite: true,
      enabled: true,
      color: "#AAFF00",
      product_Inventories: 
            [
                {
                    name: 'platano verde',
                    productID: 1,
                    price: 100,
                    marketName: 'Bravo',
                    color: "#50C878"
                },
                {
                    name: 'coca-cola',
                    productID: 2,
                    price: 200,
                    marketName: 'Sirena',
                    color: "#90EE90"
                },
                {   name: 'salami',
                    productID: 3,
                    price:50,
                    marketName: 'Bravo',
                    color: "#AAFF00"
                }
            ]      
    },
    {
        id: 2,
        name: "Lista 2",
        description: "Lista de prueba",
        appUser: 
            {
                id: 5,
                name: "rafa",
                password: "123",
                email: "lala@land.com",
                phoneNumber: "8491234567"
             },
      totalPrice: 6000,
      isFavorite: true,
      enabled: true,
      color: "#AFE1AF",
      product_Inventories: 
        [
            {
                name: 'pan de agua',
                productID: 5,
                price: 3000,
                marketName: 'Sirena',
                color: "#50C878",
            },
            {
                name: 'lechuga romana',
                productID: 6,
                price: 2000,
                marketName: 'Bravo',
                color: "#90EE90",
            },
            {
                name: 'banana',
                productID: 7,
                price: 1000,
                marketName: 'Ole',
                color: "#AAFF00",
            }
        ]      
    },
    {
        id: 5,
        name: "Lista 3",
        description: "Lista de prueba",
        appUser: 
            {
                id: 7,
                name: "rafa",
                password: "123",
                email: "lala@land.com",
                phoneNumber: "8491234567"
             },
      totalPrice: 2999,
      isFavorite: true,
      enabled: true,
      color: "#50C878",
      product_Inventories: 
        [
            {
                name: 'manzana',
                productID: 7,
                price: 1000,
                marketName: 'Bravo',
                color: "#50C878",
            },
            {
                name: 'frito lays',
                productID: 8,
                price: 1999,
                marketName: 'Sirena',
                color: "#90EE90",
            }
        ]      
    }
];

const filteredData={
    labels: ["lista1", "lista2", "lista3"],
    datasets:[
        {
            data:[350, 6000, 2999]
        }
    ]
}

const screenWidth = Dimensions.get("window").width;

//The line we use to divide Flatlist items
const itemDivider = () => {
        return (
          <View
            style={{
              height: 2,
              width: "100%",
              backgroundColor: '#C0C0C0',
            }}
          />
        );
      }

    

export default function UserDashboardScreen(){

    const [totalPrice, addPrice] = useState(0);
    
    const addToCount = (value) =>{
        addPrice(totalPrice+value)   
    }

    //Chart Configurations, enter your prefered colors here
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(54, 236, 127, ${opacity})`,
        strokeWidth: 3, // optional, default 3
        useShadowColorFromDataset: false // optional, default false
    };
    
    // const addPriceToTotal(value) => {
    //     addPrice((totalPrice + value))
    // };

    return (
        <View style={styles.base}>

                <View style={styles.totalPriceCount}>
                <Text style={styles.countText}>Total</Text>
                <Text style={styles.countText}>{totalPrice}</Text>
                </View>

                <View style={styles.container}>
                        <View style={styles.expenditureContainer}>

                            <Text style = {styles.expenditureText}> Costo Total</Text>
                                <PieChart
                                    data={exampleData}
                                    width={Dimensions.get('window').width}
                                    height={220}
                                    chartConfig={chartConfig}
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

                        <View style ={styles.productRankContainer}>
                            <Text style={styles.productRankTitle}>List Breakdown</Text>
                            <FlatList
                            data={exampleData}
                            renderItem={({item}) =>{
                            return (
                                <>
                                    <Text style={styles.productRankText}>{item.name}</Text>
                                    <PieChart
                                        data={item.product_Inventories}
                                        width={Dimensions.get('window').width}
                                        height={220}
                                        chartConfig={chartConfig}
                                        style={{
                                            marginVertical: 8,
                                            borderRadius: 16,
                                        }}
                                        accessor="price"
                                        backgroundColor="none"
                                        margin="10"
                                        border='10'

                                        absolute //for the absolute number remove if you want percentage
                                    />
                                </>

                            );
                            }}
                            keyExtractor={(item) => item.id}
                            ItemSeparatorComponent={itemDivider}
                            />

                            


                        </View>
                </View>
        </View>
    )
}




const styles = StyleSheet.create({
    base: {
        backgroundColor: "#B5D3D3",
        height: "100%",
        flex: 1,
        padding: 16,
      },
      container: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 4,
      },
      expenditureContainer: {
        flex: 2

      },
      productRankContainer:{
        flex: 2,
        justifyContent:'space-around',
        padding: 40

      },
      expenditureText:{
        fontFamily: 'Cabin',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 36,
        lineHeight: 44,
        
        /* identical to box height */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#0B3F57',
      },
      productRankText:{
        fontFamily: 'Cabin',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 24,
        display: 'flex',
        alignItems: 'center',
        color: '#0B3F57',
        
      },
      productRankTitle:{
        fontFamily: 'Cabin',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 36,
        lineHeight: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        color: '#0B3F57',
      },
      totalPriceCount:{
        flex:0.15,
        backgroundColor: '#00A47E',
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 15,
        margin: 40,
      },
      countText:{
        fontFamily: 'Cabin',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 16,
        letterSpacing: '0em',
        textAlign: 'left',
        color: 'rgba(255, 255, 255, 1)'
      }
})