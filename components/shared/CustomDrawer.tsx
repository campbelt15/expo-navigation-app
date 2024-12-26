import { View, Text } from "react-native";
import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View className="flex items-center justify-center mx-3 mb-10 h-[150px] rounded-xl bg-primary">
        <View className="flex items-center justify-center w-24 h-24 bg-white rounded-full">
          <Text className="text-3xl text-primary">OC</Text>
        </View>
      </View>

      {/* DrawerItems */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
