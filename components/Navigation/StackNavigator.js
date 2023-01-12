import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { Pressable, StyleSheet } from "react-native";

import LoginScreen from "../../screens/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen";
import PersonalScreen from "../../screens/PersonalScreen";
import ViewOne from "../../screens/onboarding/ViewOne";
import ViewTwo from "../../screens/onboarding/ViewTwo";
import HelpScreen from "../../screens/HelpScreen";
import TranslationProvider from "../TranslationProvider";

import { colors } from "../../styles/globals";
import ProductsScreen from "../../screens/ProductsScreen";
import AddProductScreen from "../../screens/AddProductScreen";
import ProductInfoScreen from "../../screens/ProductInfoScreen";
import InventoriesScreen from "../../screens/InventoriesScreen";
import HomeScreen from "../../screens/HomeScreen";
import MarketsScreen from "../../screens/MarketsScreen";
import InventoryProductsScreen from "../../screens/InventoryProductsScreen";
import NewInventoryScreen from "../../screens/NewInventoryScreen";
import UpdateInventoryScreen from "../../screens/UpdateInventoryScreen";
import InventoriesSelectionScreen from "../../screens/InventoriesSelectionScreen";
import UserDashboardScreen from  "../../screens/UserDashboardScreen"

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

export const HomeStackNavigator = ({ navigation }) => {
  const { t } = useTranslation();
  const homeTitle = t("Inicio");
  const productsTitle = t("Productos");
  const helpTitle = t("Ayuda");
  const inventoryTitle = t("Lista");
  const productInfoTitle = t("Información de producto");

  const openDrawer = () => navigation.openDrawer();

  return (
    <Stack.Navigator
      initialRouteName="HomeDashboard"
      screenOptions={{ headerTitleStyle: styles.headerText }}
    >
      <Stack.Screen
        name="HomeDashboard"
        component={HomeScreen}
        options={{
          headerTitle: homeTitle,
          headerLeft: () => (
            <Pressable onPress={openDrawer} style={styles.menuBtn}>
              <Feather name="menu" size={30} color={colors.dark} />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("HelpDashboard")}
              style={styles.menuBtn}
            >
              <Feather name="help-circle" size={30} color={colors.dark} />
            </Pressable>
          ),
        }}
      />

      <Stack.Screen
        name="HelpDashboard"
        component={HelpScreen}
        options={{
          headerTitle: helpTitle,
          headerRight: () => (
            <TranslationProvider color={colors.dark}>
            </TranslationProvider>
          ),
        }}
      />

      <Stack.Screen
        name="ProductsDashboard"
        component={ProductsScreen}
        options={{ headerTitle: productsTitle }}
      />
      <Stack.Screen
        name="InventoryProducts"
        component={InventoryProductsScreen}
        options={({ route }) => ({
          headerTitle: route.params.name || inventoryTitle,
        })}
      />
      <Stack.Screen
        name="ProductInfo"
        component={ProductInfoScreen}
        options={{ headerTitle: productInfoTitle }}
      />
    </Stack.Navigator>
  );
};

export const MarketsStackNavigator = ({ navigation }) => {
  const { t } = useTranslation();
  const marketsTitle = t("Supermercados");
  const productsTitle = t("Productos");
  const productInfoTitle = t("Información de producto");

  const openDrawer = () => navigation.openDrawer();

  return (
    <Stack.Navigator
      initialRouteName="MarketsDashboard"
      screenOptions={{ headerTitleStyle: styles.headerText }}
    >
      <Stack.Screen
        name="MarketsDashboard"
        component={MarketsScreen}
        options={{
          headerTitle: marketsTitle,
          headerLeft: () => (
            <Pressable onPress={openDrawer} style={styles.menuBtn}>
              <Feather name="menu" size={30} color={colors.dark} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="ProductsDashboard"
        component={ProductsScreen}
        options={{
          headerTitle: productsTitle,
        }}
      />
      <Stack.Screen
        name="ProductInfo"
        component={ProductInfoScreen}
        options={{ headerTitle: productInfoTitle }}
      />
    </Stack.Navigator>
  );
};

export const InventoriesStackNavigator = ({ navigation }) => {
  const { t } = useTranslation();
  const inventoriesTitle = t("Listas");
  const newInventoryTitle = t("Creación de listas");
  const updateInventoryTitle = t("Modificación de listas");
  const inventoryTitle = t("Lista");

  const openDrawer = () => navigation.openDrawer();

  return (
    <Stack.Navigator
      initialRouteName="InventoriesDashboard"
      screenOptions={{ headerTitleStyle: styles.headerText }}
    >
      <Stack.Screen
        name="InventoriesDashboard"
        component={InventoriesScreen}
        options={{
          headerTitle: inventoriesTitle,
          headerLeft: () => (
            <Pressable onPress={openDrawer} style={styles.menuBtn}>
              <Feather name="menu" size={30} color={colors.dark} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="NewInventory"
        component={NewInventoryScreen}
        options={{ headerTitle: newInventoryTitle }}
      />
      <Stack.Screen
        name="UpdateInventory"
        component={UpdateInventoryScreen}
        options={{ headerTitle: updateInventoryTitle }}
      />
      <Stack.Screen
        name="InventoryProducts"
        component={InventoryProductsScreen}
        options={({ route }) => ({
          headerTitle: route.params.inventory.name || inventoryTitle,
        })}
      />
    </Stack.Navigator>
  );
};

export const HelpStackNavigator = ({ navigation }) => {
  const { t } = useTranslation();
  const helpTitle = t("Ayuda");

  const openDrawer = () => navigation.openDrawer();

  return (
    <Stack.Navigator
      initialRouteName="HelpDashboard"
      screenOptions={{ headerTitleStyle: styles.headerText }}
    >
      <Stack.Screen
        name="HelpDashboad"
        component={HelpScreen}
        options={{
          headerTitle: helpTitle,
          headerLeft: () => (
            <Pressable onPress={openDrawer} style={styles.menuBtn}>
              <Feather name="menu" size={30} color={colors.dark} />
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export const ProductsStackNavigator = ({ navigation }) => {
  const { t } = useTranslation();
  const productsTitle = t("Productos");
  const productInfoTitle = t("Información de producto");
  const addproductTitle = t("Información de producto");
  const productSelectionTitle = t("Agregando producto a listas");
  const inventoriesTitle = t("Listas");

  const openDrawer = () => navigation.openDrawer();

  return (
    <Stack.Navigator
      initialRouteName="ProductsDashboad"
      screenOptions={{ headerTitleStyle: styles.headerText }}
    >
      <Stack.Screen
        name="ProductsDashboard"
        component={ProductsScreen}
        options={{
          headerTitle: productsTitle,
          headerLeft: () => (
            <Pressable onPress={openDrawer} style={styles.menuBtn}>
              <Feather name="menu" size={30} color={colors.dark} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="AddProduct"
        component={AddProductScreen}
        options={{ headerTitle: addproductTitle }}
      />
      <Stack.Screen
        name="ProductInfo"
        component={ProductInfoScreen}
        options={{ headerTitle: productInfoTitle }}
      />
      <Stack.Screen
        name="InventoriesSelection"
        component={InventoriesSelectionScreen}
        options={{ headerTitle: productSelectionTitle }}
      />
      <Stack.Screen
        name="InventoriesDashboard"
        component={InventoriesScreen}
        options={{ headerTitle: inventoriesTitle }}
      />
      
    </Stack.Navigator>
  );
};

export const UserDashboardNavigator = ({ navigation }) => {
  const { t } = useTranslation();
  const dashboardTitle = t("Dashboard");

  const openDrawer = () => navigation.openDrawer();

  return (
    <Stack.Navigator
      initialRouteName="HelpDashboard"
      screenOptions={{ headerTitleStyle: styles.headerText }}
    >
      <Stack.Screen
        name="UserDashboad"
        component={UserDashboardScreen}
        options={{
          headerTitle: dashboardTitle,
          headerLeft: () => (
            <Pressable onPress={openDrawer} style={styles.menuBtn}>
              <Feather name="menu" size={30} color={colors.dark} />
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  menuBtn: {
    marginHorizontal: 11,
  },
  headerText: {
    fontFamily: "Cabin-Medium",
    fontSize: 18,
    color: colors.dark,
  },
});
