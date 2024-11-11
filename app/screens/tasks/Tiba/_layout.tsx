import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import MenuContent from "@/components/core/MenuContent";
import LeftNavDrawer from "@/components/core/LeftNavDrawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerPosition:"right",
          headerShown: false,
        }}
        drawerContent={(props) => (
          <MenuContent
            {...props.state}
            {...props.navigation}
            {...props.descriptors}
          />
        )}
      />
    </GestureHandlerRootView>
  );
}
