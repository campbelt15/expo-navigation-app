import { View, Text, FlatList } from "react-native";
import React from "react";
import { products } from "@/store/products.store";
import { Link } from "expo-router";

const ProductsScreen = () => {
  return (
    <View className="flex flex-1">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="p-4 mt-5 border-b border-gray-200">
            <Text className="text-lg font-work-medium">{item.title}</Text>
            <Text className="text-secondary-100">{item.description}</Text>

            <View className="flex flex-row justify-between mt-5">
              <Text className="mr-5 text-primary">${item.price}</Text>
              <Link href={`/products/${item.id}`} className="ml-5">
                Ver detalles
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
