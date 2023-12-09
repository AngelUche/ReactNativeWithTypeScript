// App.tsx
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import { store } from "./app/store";

import {
  CategoriesScreen,
  MealsScreen,
  MealDetailScreen,
  FavoriteScreen,
} from "./screens";
import { RootStackParamList } from "./constants/RootStackParamList";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#24231f" },
        headerTintColor: "white",
        headerTitleStyle: { fontSize: 26, fontWeight: "bold" },
        sceneContainerStyle: { backgroundColor: "#403e39" },
        drawerActiveTintColor: "#d5cce8",
        drawerContentStyle:{backgroundColor:"#403e39"},
        drawerInactiveTintColor:"white",
        drawerActiveBackgroundColor:"#321e59",
      }}
    >
      <Drawer.Screen
        name="MainCategories"
        component={CategoriesScreen}
        options={{
          drawerLabel: "Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favoritescreen"
        component={FavoriteScreen}
        options={{
          drawerLabel: "Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
    <Provider store={store}>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              animation: "slide_from_left",
            headerStyle: { backgroundColor: "#24231f" },
            contentStyle:{backgroundColor:"#403e39", },
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerTitleStyle: { fontSize: 26, fontWeight: "bold" },
          
            }}
          >
            <Stack.Screen
              name="Categories"
              component={DrawerNavigation}
              options={{ title: "All Categories", headerShown: false }}
            />
            <Stack.Screen
              name="MealsScreen"
              component={MealsScreen}
              options={{ title: "Meals page", gestureEnabled: false }}
              />
            <Stack.Screen name="MealDetails" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
