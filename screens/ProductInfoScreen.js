import React, { Component, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Touchable,
} from "react-native";
import { Pressable } from "react-native";
import AppButton from "../components/AppButton";
import globalStyles from "../styles";
import { Modal } from "react-native";
import { set } from "react-native-reanimated";
import { Translation } from "react-i18next";
import { API_URL } from "../api/constants";

//Random Data
const DATA_WITH_ID = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Bravo",
    price: 120,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "La Sirena",
    price: 300,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Jumbo",
    price: 820,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d2312",
    title: "Olé",
    price: 820,
  },
];

export default class ProductInfoScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // dataSource: [],
      showLists: false,
      loadingLists: false,
      productPrice: 0,
      productQuantity: 0,
      markets: []
    };

    this.increaseOnPress = this.increaseOnPress.bind(this);
    this.decreaseOnPress = this.decreaseOnPress.bind(this);
    this.addProductToList = this.addProductToList.bind(this);
    this.pressHandler = this.pressHandler.bind(this);
    // this.markets = this.pricesList.bind(this);
  }

  increaseOnPress() {
    this.setState({
      productQuantity: this.state.productQuantity + 1,
    });
  }

  decreaseOnPress() {
    if (this.state.productQuantity > 0) {
      this.setState({
        productQuantity: this.state.productQuantity - 1,
      });
    }
  }

  addProductToList() {
    // this.setState({ showLists: true, loadingLists: true });
    // console.log("added!");

    this.props.navigation.navigate("AddProduct", {
      id: this.props.route.params.id,
      price: this.state.productPrice,
      quantity: this.state.productQuantity,
    });

    // setTimeout(() => {
    //   this.setState({ loadingLists: false });
    // }, 2000);
  }

  pressHandler(item) {
    this.setState({
      price: item.price,
    });
  }

  // async getPrices(){
  //   try
  //   {
  //     const response = await fetch(`${API_URL}/Product/GetByID?id=${this.props.route.params.id}`);

  //     const data = await response.json();

  //     console.log(data.product_Markets);

  //     this.setState({dataSource: data});
  //   }
  //   catch(error)
  //   {
  //     console.error('Error API', error);
  //   }
  // }

  updateMarkets(props){
    this.setState({markets: this.props.route.params.product.product_Markets})
  }

  componentDidUpdate(){
  //   console.log(this.props);
  //   console.log(this.props.route.params.product.product_Markets);
    
  //   const [products_Markets] = this.props.route.params.product.product_Markets;
  //   // console.log(products_Markets);

  //   this.setState({
  //     markets: products_Markets
  //   })
  //   this.setState({markets: [...this.state.markets, ...this.props.route.params.product.product_Markets]})
    
  //   console.log(this.state.markets);
    updateMarkets();
  }


  render() {

    // const price_array = this.state.dataSource.product_Markets;
    // const priceList = price_array.map((product) =>
    // <li>{product}</li>
    // );

    return (
      <View style={styles.base}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={{
                uri: `${this.state.dataSource.image}`,
              }}
            />
          </View>
          <Text style={styles.title}>{this.props.route.params.product.name}</Text>
          <Text style={styles.info}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </Text>

          <View style={styles.prices}>
            <FlatList
              data={this.state.markets}
              renderItem={({ item }) => {
                <TouchableOpacity onPress={() => pressHandler(item)}>
                  <View style={styles.listItem}>
                    <Text style={styles.listItemText}>{item.marketID}</Text>
                    <Text style={styles.listItemPrice}>{item.price}</Text>
                  </View>
                </TouchableOpacity>;
              }}
              keyExtractor={(item) => item.price}
              horizontal
              extraData={this.state.markets}
            />
            
          </View>

          <View style={styles.quantityContainer}>
            <View>
              <Translation>
                {(t) => (
                  <Text style={styles.quantityLabel}>{t("Cantidad")}</Text>
                )}
              </Translation>
            </View>
            <View style={styles.quantityBtnWrapper}>
              <Pressable
                style={styles.quantityButton}
                onPress={this.decreaseOnPress}
              >
                <Text> - </Text>
              </Pressable>

              <Text style={styles.quantityNumber}>
                {this.state.productQuantity}
              </Text>

              <Pressable
                style={styles.quantityButton}
                onPress={this.increaseOnPress}
              >
                <Text> + </Text>
              </Pressable>
            </View>
          </View>
          <Translation>
            {(t) => (
              <AppButton
                text={t("Agregar producto")}
                onPress={this.addProductToList}
                btnStyle={[styles.btn, globalStyles.shadow]}
                textStyle={styles.btnText}
              />
            )}
          </Translation>
        </View>
        <Modal visible={this.state.showLists} transparent animationType="fade">
          <View style={styles.centeredView}>
            <View style={styles.modal}>
              {this.state.loadingLists ? (
                <ActivityIndicator color="#000" size="large" />
              ) : (
                <>
                  <Text>All lists</Text>
                  <View style={styles.actions}>
                    <AppButton
                      text={"Volver"}
                      btnStyle={[styles.actionBtn, styles.backBtn]}
                      textStyle={styles.backBtnText}
                      onPress={() => this.setState({ showLists: false })}
                    />
                    <AppButton
                      text={"Finalizar"}
                      btnStyle={[styles.actionBtn, styles.finishBtn]}
                      textStyle={styles.finishBtnText}
                      onPress={() => this.setState({ showLists: false })}
                    />
                  </View>
                </>
              )}
            </View>
          </View>
        </Modal>
      </View>
    );
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
    borderRadius: 4,
  },
  imageStyle: {
    display: "block",
    width: "90%",
    height: "90%",
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
  listItem: {
    // flex:2,
    // justifyContent: 'space-evenly',
    // alignItems: 'strech',
    // backgroundColor: '#d1efef',
    // height: 150,
    // width: "100%"
    padding: 14,
    // marginRight: 10
  },
  listItemText: {
    // backgroundColor: "#B5D3D3",
    fontWeight: "bold",
    fontSize: 14,
  },
  title: {
    fontSize: 36,
    marginBottom: 14,
    fontWeight: "bold",
    textTransform: "capitalize",
    paddingHorizontal: 10,
  },
  info: {
    fontSize: 16,
    paddingHorizontal: 10,
  },
  imageContainer: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  listItemPrice: {
    fontSize: 14,
    backgroundColor: "#B5D3D3",
    padding: 6,
    borderRadius: 4,
    marginTop: 6,
    textAlign: "center",
  },
  prices: {
    // height: 75,
    marginTop: 16,
    backgroundColor: "#d1efef",
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
  btn: {
    backgroundColor: "#76B2B2",
    maxWidth: "100%",
    padding: 16,
    borderRadius: 8,
    textAlign: "center",
    marginTop: "auto",
    marginBottom: 16,
    marginHorizontal: 8,
  },
  btnText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
  },
  centeredView: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modal: {
    padding: 16,
    width: 300,
    height: "75%",
    overflow: "scroll",
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ddd",
  },
  actions: {
    marginTop: "auto",
    flexDirection: "row",
    // justifyContent: "flex-end",
    gap: 16,
  },
  actionBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "000",
    borderRadius: 4,
    flex: 1,
    textAlign: "center",
  },
  backBtn: {
    // borderColor: "red",
  },
  backBtnText: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
  },
  finishBtn: {
    // borderColor: "green",
  },
  finishBtnText: {
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
  selected: {
    backgroundColor: "green",
  },
});
