import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import ListMenuPop from "./ListMenuPop";
import detailBTN from "../img/DetailBTN.png";
import axios from "axios";
import { API_URL } from "../api/constants";
import { AuthContext } from "../context/AuthContext";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

export default function Inventory({ inventory }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  console.log(inventory);

  const deleteList = (id) => {
    try {
      axios({
        method: "delete",
        url: `${API_URL}/Inventory/Delete`,
        data: { id },
      }).then(() => {
        setList((state) => {
          return state.filter((list) => list.id !== id);
        });
      });
    } catch (error) {
      console.log("something went wrong");
    }
  };

  const editList = (id) => {
    axios
      .get(`${API_URL}/Inventory/GetById`, {
        params: { id },
      })
      .then((res) => {
        navigate("UpdateList", {
          id: id,
          name: res.data.name,
          description: res.data.description,
        });
      });
  };

  const setSelectedProduct = (product) => {
    setListModal(product);
  };

  const changeModalVisibility = (bool) => {
    setIsModalVisible(bool);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ProductList", {
            list: list,
          })
        }
        key={list.id}
      >
        <View style={styles.screen}>
          <Image
            source="https://cdn0.iconfinder.com/data/icons/cosmo-layout/40/box-512.png"
            style={styles.imageStyle}
          />

          <View style={styles.content}>
            <Text style={styles.listName}>{list.name}</Text>
            <Text>
              {list.product_Inventories.length} {t("productos")}
            </Text>
          </View>

          <View style={styles.detailContainer}>
            <TouchableOpacity
              onPress={(e) => {
                changeModalVisibility(true);
                setSelectedProduct(list);
              }}
              style={styles.detailBotonStyle}
            >
              <Image source={detailBTN} style={styles.detailImageStyle} />
            </TouchableOpacity>
          </View>

          <Modal
            animationType="fade"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => {
              changeModalVisibility(false);
            }}
          >
            <ListMenuPop
              list={listModal}
              deleteList={deleteList}
              editList={editList}
              changeModalVisibility={changeModalVisibility}
            />
          </Modal>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 14,
    justifyContent: "flex-start",
    marginBottom: 15,
    position: "relative",
    zIndex: 1,
  },
  listName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
  detailImageStyle: {
    height: 20,
    width: 20,
  },
  detailBotonStyle: {
    marginTop: "2%",
  },
  content: {
    paddingLeft: "4%",
    justifyContent: "center",
  },
  detailContainer: {
    marginLeft: "3%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
  },
});
