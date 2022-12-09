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
import HomeScreen from "../../screens/HomeScreen";
import SearchProductScreen from "../../screens/SearchProductScreen";
import AddProductScreen from "../../screens/AddProductScreen";
import ProductInfoScreen from "../../screens/ProductInfoScreen";

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

export const InventoriesStackNavigator = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName="ProductList"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export const HelpStackNavigator = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HelpResources" component={HelpScreen} />
    </Stack.Navigator>
  );
};

export const ProductsStackNavigator = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={SearchProductScreen} />
      <Stack.Screen name="AddProduct" component={AddProductScreen} />
      <Stack.Screen name="ProductInfo" component={ProductInfoScreen} />
    </Stack.Navigator>
  );
};
