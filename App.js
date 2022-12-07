import React from "react";
import { AuthProvider } from "./context/AuthContext";
import AppNavigator from "./components/Navigation/AppNavigator";
import "./services/i18n/i18n";

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator/>
    </AuthProvider>
  );
}
