import { View, Text, Modal, Pressable, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";


import { useTranslation } from "react-i18next";


export default function AuthModal({ success, loading, invalidPassword, closeModal }) {
  const { t, i18n } = useTranslation();

  return (
    <View>
      <Modal
        style={styles.modal}
        visible={loading}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ActivityIndicator size="small" />
          </View>
        </View>
      </Modal>
      <Modal
        style={styles.modal}
        visible={success}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>{t("Usuario creado exitosamente.")}</Text>
            <Pressable onPress={closeModal} style={styles.btn}>
              <Text style={styles.btnText}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        style={styles.modal}
        visible={invalidPassword}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>{t("Las contraseñas no coinciden.")}</Text>
            <Pressable onPress={closeModal} style={styles.btn}>
              <Text style={styles.btnText}>{t("Intentar nuevamente")}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    minHeight: 100,
    minWidth: 100,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#76B2B2",
    marginTop: 16,
    borderRadius: 16,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
