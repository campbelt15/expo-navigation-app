import React from "react";
import { Stack, useNavigation } from "expo-router";
import { Text } from "react-native";
import { DrawerActions, StackActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeftClick = (canGoBack: boolean) => {
    if (canGoBack) {
      console.log("Volviendo a la pantalla anterior...");
      router.back();
    } else {
      console.log("No hay pantallas previas. Navegando al inicio...");
      router.push("/(drawer)/(tabs)/(stack)/home");
    }
  };

  return (
    <Stack
      screenOptions={{
        // headerShown: false, // Asegura que todos los encabezados se muestren
        headerShadowVisible: false, // Oculta la sombra del encabezado
        contentStyle: { backgroundColor: "white" },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back-outline" : "grid-outline"}
            size={20}
            onPress={canGoBack ? () => onHeaderLeftClick(canGoBack) : undefined}
            className="mr-5"
          />
        ),
      }}
    >
      <Stack.Screen name="home/index" options={{ title: "Inicio" }} />
      <Stack.Screen name="products/index" options={{ title: "Productos" }} />
      <Stack.Screen name="profile/index" options={{ title: "Perfil" }} />
      <Stack.Screen name="settings/index" options={{ title: "Ajustes" }} />
    </Stack>
  );
};

export default StackLayout;
