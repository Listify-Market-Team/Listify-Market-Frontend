import { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { colors, globalStyles } from "../styles/globals";
import axios from "axios";
import { API_URL } from "../api/constants";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../context/AuthContext";
import Box from "../components/Box";
import Button from "../components/Button";
import { useIsFocused } from "@react-navigation/native";

const Item = ({ name, product_Inventories = [], onPress, selected }) => {
  const { t } = useTranslation();

  // console.log(selected);

  return (
    <Pressable style={styles.item} onPress={onPress}>
      <View
        style={[
          styles.checkbox,
          { backgroundColor: selected ? colors.ligthGreen : colors.light },
        ]}
      ></View>
      <View>
        <Text style={styles.itemName}>{name}</Text>
        <Text styles={styles.itemProducts}>
          {t("Productos") + ": " + product_Inventories.length}
        </Text>
      </View>
    </Pressable>
  );
};

export default function InventoriesSelectionScreen({ navigation, route }) {
  const [inventories, setInventories] = useState([]);
  const [selectedInventories, setSelectedInventories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const { t } = useTranslation();
  const isFocused = useIsFocused();

  // console.log(route.params);
  // console.log(selectedInventories);

  const isInventorySelected = (inventoryId) => {
    return selectedInventories.some((i) => i.id === inventoryId);
  };

  const toggleInventory = (inventory) => {
    if (isInventorySelected(inventory.id)) {
      setSelectedInventories((state) =>
        state.filter((i) => i.id !== inventory.id)
      );
    } else {
      setSelectedInventories((state) => [...state, inventory]);
    }
  };

  const saveProductInInventories = () => {
    const { product } = route.params;

    const marketId =
      product.product_Markets.find((m) => m.price === product.price).marketID ||
      0;

    selectedInventories.forEach((inv) => {
      // fill the object
      const target = {
        inventoryId: inv.id,
        productId: product.id,
        marketId: marketId,
        quantity: product.quantity,
      };
      try {
        axios.put(`${API_URL}/Inventory/AddProductToInventory`, target);
      } catch (error) {
        console.log("Error adding product to inventories: " + error);
      }
    });
    navigation.navigate("InventoriesDashboard");
  };

  useEffect(() => {
    const fetchInventories = async () => {
      try {
        const res = await axios.get(`${API_URL}/Inventory/GetByUserId`, {
          params: { userId: user.id },
        });
        const inventories = res.data.inventories;
        setInventories(inventories);
      } catch (error) {
        console.log("Error loading inventories");
      } finally {
        setIsLoading(false);
      }
    };
    if (isFocused) {
      fetchInventories();
    }
  }, [user, isFocused]);

  return isLoading ? (
    <Box>
      <ActivityIndicator size={50} color={colors.dark} />
    </Box>
  ) : inventories.length === 0 ? (
    <Box>
      <Text style={styles.text}>{t("No tiene listas creadas")}</Text>
    </Box>
  ) : (
    <View style={globalStyles.view}>
      <Text style={styles.title}>{t("Tus listas")}</Text>
      <ScrollView>
        {inventories.map((item) => (
          <Item
            key={item.id}
            {...item}
            selected={isInventorySelected(item.id)}
            onPress={() => toggleInventory(item)}
          />
        ))}
      </ScrollView>
      <View style={styles.btn}>
        <Button onPress={saveProductInInventories}>{t("Guardar")}</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.dark,
    marginRight: 15,
  },
  itemName: {
    fontFamily: "Cabin-Bold",
    fontSize: 24,
    color: colors.green,
  },
  itemProducts: {
    fontFamily: "Cabin-Regular",
    fontSize: 18,
    color: colors.dark,
  },
  title: {
    fontFamily: "Cabin-Bold",
    fontSize: 48,
    paddingTop: 30,
    marginTop: 50,
    marginBottom: 40,
  },
  text: {
    fontFamily: "Cabin-Regular",
    fontSize: 16,
    color: colors.dark,
  },
  btn: {
    marginBottom: 50,
  },
});
