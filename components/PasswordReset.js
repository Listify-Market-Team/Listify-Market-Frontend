import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useForm } from "react-hook-form";
import AuthContainer from "./AuthContainer";
import LoginInput from "../components/LoginInput";
import { phoneRegex } from "../api/constants";
import Button from "./Button";
import { colors } from "../styles/globals";
import AuthModal from "./AuthModal";
import { supabase } from "../api/supabase";
import 'react-native-url-polyfill/auto'

import { useTranslation } from "react-i18next";

async function updatePassword(newPassword, setSuccess) {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });
  if (data) setSuccess(true);
  if (error) throw error;
}

export default function PasswordReset(props) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const { t } = useTranslation();

  const submit = async(data) => {
    if (data.password !== data.confirmPassword) {
      setInvalidPassword(true);
      return;
    }
    await updatePassword(data.password, setSuccess);
  };

  const title = t("Reestablecer contraseña");

  const closeModal = () => {
    if (success) {
      props.navigate("Login");
    } else {
      setInvalidPassword(false);
    }
    setSuccess(false);
  };

  return (
    <React.Fragment>
      <AuthContainer>
        <Text style={styles.title}>{title}</Text>
        <LoginInput
          control={control}
          name="password"
          placeholder={t("Nueva Contraseña")}
          type={"oneTimeCode"}
          secureTextEntry
          rules={{
            required: t("La contraseña es requerida"),
            minLength: {
              value: 6,
              message: t("La contraseña debe tener al menos 6 caracteres"),
            },
          }}
        />
        <LoginInput
          control={control}
          name="confirmPassword"
          placeholder={t("Confirmar contraseña")}
          type={"oneTimeCode"}
          secureTextEntry
          rules={{
            required: t("La confirmación de la contraseña es requerida"),
            minLength: {
              value: 6,
              message: t("La contraseña debe tener al menos 6 caracteres"),
            },
          }}
        />
        <View style={styles.actions}>
          <View style={styles.btn}>
            <Button
              onPress={handleSubmit(submit)}
              style={[styles.btn, styles.nextBtn]}
            >
              <Text style={styles.nextBtnText}>{t("Siguiente")}</Text>
            </Button>
          </View>
        </View>
        <AuthModal
          success={success}
          loading={loading}
          invalidPassword={invalidPassword}
          closeModal={closeModal}
          text={t("Contraseña actualizada correctamente!")}
        />
      </AuthContainer>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
    fontWeight: 700,
    marginTop: 50,
  },
  actions: {
    marginTop: 100,
    paddingHorizontal: 50,
    flexDirection: "row",
    width: "100%",
  },
  btn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  nextBtn: {
    width: "auto",
  },
  nextBtnText: {
    fontWeight: 500,
    color: "#ffffff",
    textAlign: "center",
    fontSize: 18,
  },
});
