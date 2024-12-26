import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { products } from "@/store/products.store";

const ProductScreen = () => {
  const params = useLocalSearchParams();

  const navigation = useNavigation();

  const product = products.find((product) => product.id === params.id);

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? "Producto",
    });
  }, [product]);

  if (!product) {
    return <Redirect href="/products" />;
  }

  console.log(product);

  return (
    <View className="px-5 mt-4">
      <Text className="text-2xl font-work-black">{product.title}</Text>
      <Text className="text-secondary-100">{product.description}</Text>
      <Text className="text-primary">${product.price}</Text>
    </View>
  );
};

export default ProductScreen;
