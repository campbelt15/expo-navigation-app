import { View, Text } from "react-native";
import { Slot, SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Import your global CSS file
import "./global.css";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />;
    </GestureHandlerRootView>
  );

  // return <Slot />;
  // return (
  //   <Stack
  //     screenOptions={{
  //       headerShown: false, // Asegura que todos los encabezados se muestren
  //       headerShadowVisible: false, // Oculta la sombra del encabezado
  //       contentStyle: { backgroundColor: "white" },
  //       headerTintColor: "#333",
  //     }}
  //   >
  //     <Stack.Screen name="(stack)/home/index" options={{ title: "Inicio" }} />
  //     <Stack.Screen
  //       name="(stack)/products/index"
  //       options={{ title: "Productos" }}
  //     />
  //     <Stack.Screen
  //       name="(stack)/profile/index"
  //       options={{ title: "Perfil" }}
  //     />
  //     <Stack.Screen
  //       name="(stack)/settings/index"
  //       options={{ title: "Ajustes" }}
  //     />
  //   </Stack>
  // );
};

export default RootLayout;
