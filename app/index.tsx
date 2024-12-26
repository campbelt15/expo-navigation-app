import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";

const App = () => {
  // return <Redirect href="/(stack)/home" />;
  // return <Redirect href="/tabs/(stack)/home" />;
  // return <Redirect href="/drawer" />;
  return <Redirect href="/home" />;
  // return (
  //   <SafeAreaView>
  //     <View className="mx-6 mt-2.5">
  //       <Text
  //         className="text-3xl "
  //         style={{
  //           fontFamily: "WorkSans-Black",
  //         }}
  //       >
  //         Hola Mundo con Tailwind
  //       </Text>
  //       <Text className="text-3xl font-work-black text-primary">
  //         Hola Mundo con Tailwind
  //       </Text>
  //       <Text className="text-3xl font-work-medium text-secondary-100">
  //         Hola Mundo con Tailwind
  //       </Text>
  //       <Text className="text-3xl font-work-light text-tertiary">
  //         Hola Mundo con Tailwind
  //       </Text>
  //       x
  //     </View>
  //     <Link href="/products">
  //       <Text className="text-3xl font-work-light text-tertiary">
  //         Productos
  //       </Text>
  //     </Link>
  //   </SafeAreaView>
  // );
};

export default App;
