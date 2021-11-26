import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors, typography } from "../theme";
import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import Home from "../screens/home";
import Headphones from "../screens/headphones";
import Speakers from "../screens/speakers";
import Earphones from "../screens/earphones";
import Cart from "../screens/cart";
import Checkout from "../screens/checkout";
import ProductDetails from "../screens/product-details";
import { useSelector } from "react-redux";
import { selectCartLength } from "../../redux/cartSlice";
import { StackActions } from '@react-navigation/native';

const resetStackOnTabPress = ({ navigation }) => ({
  tabPress: (e) => {
    const state = navigation.getState();
    if (state) {
      const nonTargetTabs = state.routes.filter((r) => r.key !== e.target);
      nonTargetTabs.forEach((tab) => {
        const tabName = tab?.name;
        const stackKey = tab?.state?.key;
        if (stackKey) {
          navigation.dispatch({
            ...StackActions.popToTop(),
            target: stackKey,
          });
        }
      });
    }
  },
});

const THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

export default function navigation() {
  return (
    <NavigationContainer theme={THEME}>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  const cartLength = useSelector(selectCartLength);
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: styles.labelStyle,
        tabBarBadgeStyle: styles.badgeStyle,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStackScreens}
        listeners={resetStackOnTabPress}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon fontFamily="Ionicons" name="home" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Headphones"
        component={HeadphonesStackScreens}
        listeners={resetStackOnTabPress}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon fontFamily="MaterialCommunityIcons" name="headphones" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Speakers"
        component={SpeakersStackScreens}
        listeners={resetStackOnTabPress}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon fontFamily="MaterialCommunityIcons" name="speaker" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Earphones"
        component={EarphonesStackScreens}
        listeners={resetStackOnTabPress}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon fontFamily="SimpleLineIcons" name="earphones-alt" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartStackScreens}
        listeners={resetStackOnTabPress}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon fontFamily="Ionicons" name="cart-outline" color={color} />
          ),
          tabBarBadge: cartLength > 0 ? cartLength : null
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon({ fontFamily, name, color }) {
  if (fontFamily === "MaterialCommunityIcons") {
    return <MaterialCommunityIcons name={name} size={24} color={color} />;
  } else if (fontFamily === "Ionicons") {
    return <Ionicons name={name} size={24} color={color} />;
  } else if (fontFamily === "SimpleLineIcons") {
    return <SimpleLineIcons name={name} size={24} color={color} />;
  }
}

const HomeStack = createNativeStackNavigator();
function HomeStackScreens() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={Home} />
      <HomeStack.Screen name="ProductDetails" component={ProductDetails} />
    </HomeStack.Navigator>
  );
}

const HeadphonesStack = createNativeStackNavigator();
function HeadphonesStackScreens() {
  return (
    <HeadphonesStack.Navigator screenOptions={{ headerShown: false }}>
      <HeadphonesStack.Screen name="HeadphonesScreen" component={Headphones} />
      <HeadphonesStack.Screen name="ProductDetails" component={ProductDetails} />
    </HeadphonesStack.Navigator>
  );
}

const EarphonesStack = createNativeStackNavigator();
function EarphonesStackScreens() {
  return (
    <EarphonesStack.Navigator screenOptions={{ headerShown: false }}>
      <EarphonesStack.Screen name="EarphonesScreen" component={Earphones} />
      <EarphonesStack.Screen name="ProductDetails" component={ProductDetails} />
    </EarphonesStack.Navigator>
  );
}

const SpeakersStack = createNativeStackNavigator();
function SpeakersStackScreens() {
  return (
    <SpeakersStack.Navigator screenOptions={{ headerShown: false }}>
      <SpeakersStack.Screen name="SpeakersScreen" component={Speakers} />
      <SpeakersStack.Screen name="ProductDetails" component={ProductDetails} />
    </SpeakersStack.Navigator>
  );
}

const CartStack = createNativeStackNavigator();
function CartStackScreens() {
  return (
    <CartStack.Navigator screenOptions={{ headerShown: false }}>
      <CartStack.Screen name="CartScreen" component={Cart} />
      <CartStack.Screen name="Checkout" component={Checkout} />
    </CartStack.Navigator>
  );
}

const styles = StyleSheet.create({
  labelStyle: {
    fontFamily: typography.regular
  },
  badgeStyle: {
    backgroundColor: colors.primary,
    color: colors.white,
    fontFamily: typography.regular,
    fontSize: 11
  }
});
