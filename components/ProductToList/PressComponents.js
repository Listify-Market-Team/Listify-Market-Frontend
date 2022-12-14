import React from "react";
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { SpinnerCircular } from "spinners-react";
import { API_URL } from "../../api/constants";
import { useTranslation } from "react-i18next";

export const IconBack = (props) => {
  return (
    <TouchableHighlight
      onPress={() => {
        props.navigation.goBack();
      }}
    >
      <View>
        <Ionicons
          style={styles.Icon}
          name="arrow-back"
          size={40}
          color="black"
        />
      </View>
    </TouchableHighlight>
  );
};

export const Spinner = () => {
  return (
    <View style={styles.SpinnerContainer}>
      <SpinnerCircular style={styles.Spinner} />
    </View>
  );
};

export const AddProductButton = (props) => {
  const List = [];
  const prod = props.product;
  const { t, i18n } = useTranslation();

  const results = () => {
    props.data.map((d, index1) => {
      props.datacheck.map((c, index2) => {
        if (index1 == index2 && c === true) {
          const doGetRequest = async () => {
            await axios
              .put(`${API_URL}/Inventory/AddProductToInventory`, {
                marketID: product.marketId,
                inventoryID: d.id,
                productID: prod.id,
                quantity: prod.quantity,
              })
              .catch((error) => {
                ({ errorMessage: error.message });
              });
          };

          doGetRequest();
          List.push(d.id);
        }
      });
    });

    if (List.length == 0) {
      alert(t("Seleccione algo"));
    } else {
      props.navigation.navigate("Home");
    }
  };

  return (
    <Pressable style={styles.button} onPress={results}>
      <Text style={styles.text}>{t("Agregar producto")}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    alignContent: "center",
    fontWeight: "bold",
  },
  Spinner: {
    width: "20%",
    marginTop: "60%",
  },
  SpinnerContainer: {
    alignItems: "center",
    flex: 1,
    alignContent: "center",
  },
  Icon: {
    padding: 15,
  },
  text: {
    fontSize: 15,
    alignContent: "center",
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    marginTop: 30,
    paddingVertical: 10,
    borderWidth: 3,
    borderColor: "#B8B9BB",
    borderRadius: 15,
    backgroundColor: "#76B2B2",
  },
});
