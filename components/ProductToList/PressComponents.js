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

export const IconBack = () => {
  return (
    <TouchableHighlight
      onPress={() => {
        /*navigation.dispatch(DrawerActions.openDrawer());*/
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

export const AddProductButton = (props) => {
  const List = [];
  const prod = props.product;

  const results = () => {
    props.data.map((d, index1) => {
      props.datacheck.map((c, index2) => {
        if (index1 == index2 && c === true) {
          const doGetRequest = async () => {
            const res = await axios
              .put(
                "http://localhost:5209/api/Inventory/AddProductToInventory",
                {
                  "inventoryID": d.id,
                  "productID": prod.id,
                  "quantity": prod.quantity,
                }
              )
              .catch((error) => {
                ({ errorMessage: error.message });
              });

            const data = await res.status;
            console.log(data);
            // SetRequest(data);
          };

          doGetRequest();

          List.push(d.id);
        }
      });
    });

    //console.log(request);

    if (List.length == 0) {
      alert("Seleccione algo");
    } else {
      alert(List);
    }
  };

  return (
    <Pressable style={styles.button} onPress={results}>
      <Text style={styles.text}>Agregar producto</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    alignContent: "center",
    fontWeight: "bold",
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