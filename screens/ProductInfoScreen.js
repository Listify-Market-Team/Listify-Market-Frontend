import React, {Component, useState} from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { NavigationContainer } from "@react-navigation/native";


//Random Data
const DATA_WITH_ID = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    price: 120,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    price: 300,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    price: 820
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d2312',
    title: 'Fourth Item',
    price: 820
  },
];

const renderList = ({ item }) => {
  return (
    <View style = {styles.listItem}>
      <Text style ={styles.listItemText}>{item.title}</Text>
      <Text style ={styles.listItemPrice}>{item.price}</Text>
    </View>
  );
};




export default class ProductInfoScreen extends Component
{
    constructor(props){
      super(props);

      this.state = {
        productQuantity : 0
      }

      this.increaseOnPress = this.increaseOnPress.bind(this)
      this.decreaseOnPress = this.decreaseOnPress.bind(this)
      // this.openDrawer = this.openDrawer.bind(this)
    }

    increaseOnPress (){
      this.setState({
        productQuantity: this.state.productQuantity + 1
      })
    }
    
    decreaseOnPress(){
    
      if (this.state.productQuantity > 0){
        this.setState({
          productQuantity: this.state.productQuantity - 1
        })
      }
    
    }

    // openDrawer(){
    //   <DrawerNavigator/>
    // }

    render () {

    
      return( 
          <View style={styles.base}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                  style = {styles.imageStyle}
                  source = {{uri: 'https://cdn-icons-png.flaticon.com/512/1548/1548682.png'}}/> 
                      
              </View>
              <Text style={styles.title}>Product Name</Text>
              <Text style={styles.info}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>

              <View style={styles.prices}>
              <FlatList
                data={DATA_WITH_ID}
                renderItem={renderList}
                keyExtractor={item => item.id}
                horizontal = {true}
                />
              </View>

                <View style={styles.quantityContainer}>

                    <View style={{flex:3}}>
                      <Text>Quantity</Text>
                    </View>

                    <View style={{flex:1, flexDirection:'row'}}>
                      <Pressable
                        style={styles.quantityButton}
                        onPress={this.increaseOnPress}
                        >
                        <Text> + </Text>
                      </Pressable>

                      <Text style={styles.quantityNumber}>{this.state.productQuantity}</Text>

                      <Pressable
                        style={styles.quantityButton}
                        onPress={this.decreaseOnPress}
                        >
                        <Text> - </Text>
                      </Pressable>
                    </View>
                    
                    {/* <View>
                      <Pressable
                          style={styles.addButton}
                          onPress={this.openDrawer}
                          >
                          <Text> Agregar </Text>
                      </Pressable>
                    </View> */}
                    

              </View>
              
            </View>
        </View>
      )
    }

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
      borderRadius: 4
    },
    imageStyle: {
      display: "block",
      width: "90%", 
      height: "90%" 
    },
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    // midContainer: {
    //   flex:2,
    //   marginBottom: 20, 
    //   borderWidth: 2, 
    //   justifyContent: 'space-between', 
    //   alignItems: 'center', 
    //   backgroundColor: '#DAE9E9'
    // },
    // bottomContainer:{
    //   flex:2,
    //   marginBottom: 20, 
    //   borderWidth: 2, 
    //   justifyContent: 'space-between', 
    //   alignItems: 'center', 
    //   backgroundColor: '#DAE9E9'
    // },
    listItem:{
        // flex:2,
        // justifyContent: 'space-evenly',
        // alignItems: 'strech',
        // backgroundColor: '#d1efef',
        // height: 150,
        // width: "100%"
        padding: 14,
        // marginRight: 10
    },
    listItemText:{
      // backgroundColor: "#B5D3D3",
      fontWeight: "bold",
      fontSize: 14
    },
    title: {
      fontSize: 36,
      marginBottom: 14,
      fontVariant: "bold",
      textTransform: "capitalize"
    },
    info: {
      fontSize: 16,
    },
    imageContainer: {
      width: "100%",
      height: 250,
      justifyContent: "center",
      alignItems: "center"
    },
    listItemPrice:{
      fontSize:14,
      backgroundColor:'#B5D3D3',
      padding: 6,
      borderRadius: 4,
      marginTop: 6,
      textAlign: "center"
    },
    prices: {
      // height: 75,
      marginTop: 16,
      backgroundColor: "#d1efef"
    },
    quantityContainer:{
      flexDirection:'row',
      width: "100%",
      height: 50,
      justifyContent: "space-evenly",
      alignItems: "center",
      padding: 10,
      backgroundColor: '#9ba9a9',
      borderRadius: 5
    },
    quantityButton:{
      fontSize: 80,
      fontWeight: "bold",
      backgroundColor:'#d1efef',
      borderRadius:10
    },
    quantityNumber:{
      backgroundColor:"white",
      borderRadius:10
    },
    addButton:{
      borderRadius: 5,
      fontsize: 10,
      fontWeight: 'normal',
      backgroundColor: '#d1efef'
    }
    
  });
