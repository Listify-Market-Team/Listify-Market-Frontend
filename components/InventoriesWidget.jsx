import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useContext } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import axios from "axios";
import Box from "../components/Box";
import { colors } from "../styles/globals";
import { API_URL } from "../api/constants";
import { AuthContext } from "../context/AuthContext";

export default function InventoriesWidget() {
  const [inventories, setInventories] = useState({ loading: true, data: [] });
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const { user } = useContext(AuthContext);
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchInventories = () => {
      try {
        axios
          .get(`${API_URL}/Inventory/GetByUserId`, {
            params: { userId: user.id },
          })
          .then((response) => {
            if (response.status === 200) {
              setInventories({
                loading: false,
                data: response.data.inventories,
              });
              return;
            }
            setInventories({ loading: false, data: [] });
          });
        // setInventories({ loading: false, data: data });
      } catch (error) {
        console.log("Error loading inventories");
        setInventories({ loading: false, data: [] });
      }
    };
    if (isFocused) {
      fetchInventories();
    }
  }, [isFocused]);

  const title = t("Mis listas");
  const btnText = t("Ver");
  const noDataLabel = t("Sin listas para mostrar");

  const goToInventoryProducts = (id, name) => {
    navigate("InventoryProducts", { id, name });
  };

  // console.log(inventories);

  return (
    <View style={styles.widgetContainer}>
      {inventories.loading ? (
        <Box>
          <ActivityIndicator size={40} color="#000" />
        </Box>
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
          </View>
          {inventories.data.length <= 0 ? (
            <Box>
              <Text style={styles.text}>{noDataLabel}</Text>
            </Box>
          ) : (
            <ScrollView>
              {inventories.data.map((item) => (
                <View key={item.id} style={styles.item}>
                  <View>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={[styles.text, styles.greenText]}>
                      {`Total: ${item.totalPrice} RD$`}
                    </Text>
                  </View>
                  <Pressable
                    onPress={() => goToInventoryProducts(item.id, item.name)}
                    style={styles.btn}
                  >
                    <Text style={styles.text}>{btnText}</Text>
                  </Pressable>
                </View>
              ))}
            </ScrollView>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  widgetContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    height: 300,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    width: "100%",
  },
  header: {
    backgroundColor: colors.green,
    padding: 15,
  },
  title: {
    fontFamily: "Cabin-Bold",
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
  },
  item: {
    padding: 15,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginBottom: 15,
    alignItems: "center",
  },
  btn: {
    borderRadius: 20,
    backgroundColor: colors.gray,
    marginRight: 15,
    paddingHorizontal: 40,
    paddingVertical: 6,
  },
  text: {
    color: colors.black,
    fontFamily: "Cabin-Regular",
    fontSize: 16,
  },
  greenText: {
    color: colors.green,
  },
});
