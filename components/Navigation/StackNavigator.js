import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

import LoginScreen from "../../screens/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen";
import PersonalScreen from "../../screens/PersonalScreen";
import ViewOne from "../../screens/onboarding/ViewOne";
import ViewTwo from "../../screens/onboarding/ViewTwo";
import HelpScreen from "../../screens/HelpScreen";
// import ProductListScreen from "../../screens/productListScreen";
// import NewListScreen from "../../screens/NewListScreen";
// import UpdateListScreen from "../../screens/UpdateListScreen";
import SearchProductScreen from "../../screens/SearchProductScreen";
import AddProductScreen from "../../screens/AddProductScreen";
import ProductInfoScreen from "../../screens/ProductInfoScreen";
import InventoriesScreen from "../../screens/InventoriesScreen";
import HomeScreen from "../../screens/HomeScreen";
import MarketsScreen from "../../screens/MarketsScreen";

const Stack = createNativeStackNavigator();

export const AuthStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="OnboardingViewOne"
    >
      <Stack.Screen name="OnboardingViewOne" component={ViewOne} />
      <Stack.Screen name="OnboardingViewTwo" component={ViewTwo} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Personal" component={PersonalScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export const HomeStackNavigator = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName="HomeDashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeDashboard" component={HomeScreen} />
      <Stack.Screen name="ProductsDashboard" component={SearchProductScreen} />
    </Stack.Navigator>
  );
};

export const MarketsStackNavigator = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName="MarketsDashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MarketsDashboard" component={MarketsScreen} />
    </Stack.Navigator>
  );
};

export const InventoriesStackNavigator = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName="InventoriesDashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="InventoriesDashboard" component={InventoriesScreen} />
    </Stack.Navigator>
  );
};

export const HelpStackNavigator = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName="HelpDashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HelpDashboad" component={HelpScreen} />
    </Stack.Navigator>
  );
};

export const ProductsStackNavigator = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName="ProductsDashboad"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ProductsDashboard" component={SearchProductScreen} />
      <Stack.Screen name="AddProduct" component={AddProductScreen} />
      <Stack.Screen name="ProductInfo" component={ProductInfoScreen} />
    </Stack.Navigator>
  );
};
