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
import { globalStyles } from "../styles/globals";
import { Modal } from "react-native";
import { Translation } from "react-i18next";
import Button from "../components/Button";

export default class ProductInfoScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // dataSource: [],
      showLists: false,
      loadingLists: false,
      productPrice: 0,
      productQuantity: 0,
      markets: [],
      marketId: 0,
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

    // console.log(this.state.markets)
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
      productId: this.props.route.params.product.id,
      marketID: this.state.marketId,
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
      marketId: item.marketID,
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

  static getDerivedStateFromProps(props, state) {
    // console.log(props.route.params.product)

    if (props.route.params.product.product_Markets != state.markets) {
      return {
        markets: props.route.params.product.product_Markets,
      };
    }
    return null;
  }

  // componentDidUpdate(prevProps){
  //   console.log(this.props);
  //   console.log(this.props.route.params.product.product_Markets);

  //   const [products_Markets] = this.props.route.params.product.product_Markets;
  //   // console.log(products_Markets);

  //   this.setState({
  //     markets: products_Markets
  //   })
  //   this.setState({markets: [...this.state.markets, ...this.props.route.params.product.product_Markets]})

  //   console.log(this.state.markets);

  // if (prevProps.markets != this.props.route.params.product.product_Markets){
  //   this.setState({markets: this.props.route.params.product.product_Markets})
  // }
  // return null

  // }

  render() {
    // const price_array = this.state.dataSource.product_Markets;
    // const priceList = price_array.map((product) =>
    // <li>{product}</li>
    // );
    const { params } = this.props.route;

    return (
      <View style={globalStyles.view}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1548/1548682.png",
              }}
            />
          </View>
          <Text style={styles.title}>{params.product.name}</Text>
          <View style={styles.prices}>
            <FlatList
              data={this.state.markets}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={() => this.pressHandler(item)}>
                    <View style={styles.listItem}>
                      <Text style={styles.listItemPrice}>{item.price}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item.marketID}
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
              <Button onPress={this.addProductToList}>
                {t("Agregar producto")}
              </Button>
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
                    <Button
                      text={"Volver"}
                      btnStyle={[styles.actionBtn, styles.backBtn]}
                      textStyle={styles.backBtnText}
                      onPress={() => this.setState({ showLists: false })}
                    />
                    <Button onPress={() => this.setState({ showLists: false })}>
                      <Translation>{(t) => t("Finalizar")}</Translation>
                    </Button>
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  image: {
    display: "block",
    width: "90%",
    height: "90%",
  },
  name: {},
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
    fontFamily: "Cabin-Bold",
    paddingVertical: 15,
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
