import { View, Text, StyleSheet, Modal, Pressable } from "react-native";
import { useState, useContext } from "react";
import axios from "axios";
import { API_URL } from "../api/constants";
import { AuthContext } from "../context/AuthContext";
import { useTranslation } from "react-i18next";
import { globalStyles } from "../styles/globals";
import NewInventoryForm from "../components/InventoryForm";
import { colors } from "../styles/globals";
import Box from "../components/Box";

export default function NewInventoryScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { user } = useContext(AuthContext);
  const { t } = useTranslation();

  const goToInventories = () => {
    navigation.navigate("InventoriesDashboard");
  };

  const sendNewInventory = (inventory) => {
    setLoading(true);

    try {
      axios
        .post(`${API_URL}/Inventory/Create`, {
          name: inventory.name,
          description: inventory.description,
          appUserId: user.id,
        })
        .then(() => {
          setLoading(false);
          setSuccess(true);
        });
    } catch (error) {
      console.log("Error creating inventory");
    }
  };

  return (
    <View style={globalStyles.view}>
      <Text style={styles.title}>{t("Nueva lista")}</Text>
      <NewInventoryForm onSubmit={sendNewInventory} loading={loading} />
      <Modal
        animationType="fade"
        transparent={true}
        visible={success}
        onRequestClose={goToInventories}
      >
        <Box style={styles.overlay}>
          <View style={styles.modal}>
            <Text style={[styles.modalTitle]}>
              {t("Lista creada exitosamente!")}
            </Text>
            <Pressable onPress={goToInventories} style={styles.modalBtn}>
              <Text style={[styles.modalBtnText, styles.modalText]}>
                {t("OK")}
              </Text>
            </Pressable>
          </View>
        </Box>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontFamily: "Roboto",
    marginVertical: 30,
    color: colors.green,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    width: "90%",
    padding: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  modalTitle: {
    fontFamily: "Roboto",
    fontSize: 28,
    marginBottom: 50,
    textAlign: "center",
  },
  modalBtn: {
    width: "80%",
    marginHorizontal: "auto",
    padding: 10,
  },
  modalBtnText: {
    fontSize: 24,
    fontFamily: "Roboto",
    color: colors.green,
    textAlign: "center",
  },
});
