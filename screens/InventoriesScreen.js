import { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import SearchBar from "../components/SearchBar";
import Inventory from "../components/Inventory";
import { API_URL } from "../api/constants";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { colors, globalStyles } from "../styles/globals";
import Box from "../components/Box";
import Button from "../components/Button";

export default function InventoriesScreen({ navigation }) {
  const [inventories, setInventories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const { t } = useTranslation();

  const fetchInventories = async () => {
    setIsLoading(true);
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

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchInventories();
    });
    return unsubscribe;
  }, [navigation]);

  const deleteInventory = (id) => {
    setInventories((state) => {
      return state.filter((inv) => inv.id !== id);
    });
  };

  const render = ({ item }) => {
    return <Inventory inventory={item} onDelete={deleteInventory} />;
  };

  const searchInventories = (inventoryName, isEmpty) => {
    if (isEmpty) {
      fetchInventories();
      return;
    }
    setIsLoading(true);
    try {
      axios
        .get(`${API_URL}/Inventory/GetInventoryLikeName`, {
          params: { inventoryName, userId: user.id },
        })
        .then(async (res) => {
          const data = res.data.inventories;
          setInventories(data);
        });
    } catch (error) {
      console.log("something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const placeholder = t("Buscar lista");
  const title = t("Mis Listas");
  const newListText = t("Nueva Lista");
  const noDataLabel = t("No hay listas para mostrar");

  return (
    <View style={globalStyles.view}>
      <SearchBar onSearch={searchInventories} placeholder={placeholder} />

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.addBtn}>
          <Button
            onPress={() => {
              navigation.navigate("NewInventory");
            }}
          >
            <Text>{newListText}</Text>
          </Button>
        </View>
      </View>
      {isLoading ? (
        <Box>
          <ActivityIndicator size={50} color="#000" />
        </Box>
      ) : (
        <ScrollView>
          {inventories.length === 0 ? (
            <Box>
              <Text>{noDataLabel}</Text>
            </Box>
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={inventories}
              renderItem={render}
            />
          )}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    paddingTop: 10,
  },
  title: {
    fontFamily: "Cabin-Bold",
    fontSize: 36,
  },
  addBtn: {
    width: 200,
  },
});
