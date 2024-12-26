import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, router, useNavigation } from "expo-router";
import CustomBuotton from "@/components/shared/CustomBuotton";
import { DrawerActions } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomBuotton
          className="mb-2"
          color="primary"
          onPress={() => router.push("/products")}
        >
          Productos
        </CustomBuotton>
        <CustomBuotton
          className="mb-2"
          color="secondary"
          onPress={() => router.push("/profile")}
        >
          Perfil
        </CustomBuotton>
        <CustomBuotton
          className="mb-2"
          color="tertiary"
          onPress={() => router.push("/settings")}
        >
          Ajustes
        </CustomBuotton>
        <Link href="/products" asChild>
          <CustomBuotton variant="text-only" className="mb-2" color="primary">
            Productos
          </CustomBuotton>
        </Link>
        <CustomBuotton onPress={onToggleDrawer}>Abrir Menu</CustomBuotton>
        {/* <Link className="mb-5" href="/products">
          <Text>Productos</Text>
        </Link>
        <Link className="mb-5" href="/profile">
          <Text>Perfil</Text>
        </Link>
        <Link className="mb-5" href="/settings">
          <Text>Ajustes</Text>
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
