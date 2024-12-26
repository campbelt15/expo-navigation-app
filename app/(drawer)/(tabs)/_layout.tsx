import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "indigo",
        // headerShown: false, // Oculta los encabezados superiores si no los necesitas
        // tabBarStyle: {
        //   backgroundColor: "black",
        //   borderTopColor: "rgba(0, 0, 0, 0.1)",
        //   elevation: 0,
        // },
      }}
    >
      <Tabs.Screen
        name="(stack)"
        options={{
          title: "Stack",
          tabBarLabel: "Stack",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-add-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home Screen",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favorites Screen",
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color }) => (
            <Ionicons name="star-outline" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
