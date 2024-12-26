import { View, Text } from "react-native";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import CustomDrawer from "@/components/shared/CustomDrawer";

const LayoutDrawer = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        // headerShown: false,
        overlayColor: "rgba(0, 0, 0, 0.3)",
        drawerActiveTintColor: "indigo",
        headerShadowVisible: false,
        sceneContainerStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Drawer.Screen
        name="(tabs)" // This is the name of the page and must match the url from root
        options={{
          headerShown: false,
          drawerLabel: "Tabs + Stack",
          title: "Tabs + Stack",
          drawerIcon: () => <Ionicons name="person" size={24} color="black" />,
        }}
      />

      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "User",
          title: "Usuario",
          drawerIcon: () => <Ionicons name="person" size={24} color="black" />,
        }}
      />
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Horario",
          title: "Horario",
          drawerIcon: () => (
            <Ionicons name="calendar-outline" size={24} color="black" />
          ),
        }}
      />
    </Drawer>
  );
};

export default LayoutDrawer;
