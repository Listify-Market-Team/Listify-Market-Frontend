import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import ListMenuPop from "./ListMenuPop";
import axios from "axios";
import { API_URL } from "../api/constants";
import { AuthContext } from "../context/AuthContext";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { colors } from "../styles/globals";

export default function Inventory({ inventory, onDelete }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  // console.log(inventory);

  const deleteInventory = (id) => {
    try {
      axios({
        method: "delete",
        url: `${API_URL}/Inventory/Delete`,
        data: { id },
      }).then(() => {
        onDelete(id);
      });
    } catch (error) {
      console.log("Error deleting inventory");
    }
  };

  const updateInventory = (id) => {
    axios
      .put(`${API_URL}/Inventory/GetById`, {
        params: { id },
      })
      .then(() => {
        navigate("UpdateInventory", {
          inventory,
        });
      });
  };

  const changeModalVisibility = (bool) => {
    setIsModalVisible(bool);
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigate("InventoryProducts", {
          inventory,
        })
      }
      key={inventory.id}
      style={styles.itemContainer}
    >
      <View style={styles.content}>
        <Image
          source="https://cdn0.iconfinder.com/data/icons/cosmo-layout/40/box-512.png"
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={[styles.name]}>{inventory.name}</Text>
          <Text style={styles.text}>
            {inventory.product_Inventories.length} {t("productos")}
          </Text>
        </View>
      </View>

      <Pressable
        onPress={() => {
          changeModalVisibility(true);
        }}
        style={styles.optionsBtn}
      >
        <SimpleLineIcons
          name="options-vertical"
          size={30}
          color={colors.dark}
        />
      </Pressable>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          changeModalVisibility(false);
        }}
      >
        <ListMenuPop
          list={inventory}
          deleteList={deleteInventory}
          editList={updateInventory}
          changeModalVisibility={changeModalVisibility}
        />
      </Modal>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 25,
  },
  text: {
    fontFamily: "Cabin-Regular",
    fontSize: 18,
  },
  name: {
    fontFamily: "Cabin-Bold",
    fontSize: 18,
  },
  content: {
    flexDirection: "row",
  },
  info: {
    marginLeft: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
});
