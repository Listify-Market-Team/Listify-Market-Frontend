import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import AppNavigator from "./Navigation/AppNavigator";
import LoadingScreen from "../screens/onboarding/LoadingScreen";

export default function AppWrapper() {
  const { isAppLoading } = useContext(AppContext);

  return (
    <>
      <AppNavigator />
      <LoadingScreen show={isAppLoading} />
    </>
  );
}
