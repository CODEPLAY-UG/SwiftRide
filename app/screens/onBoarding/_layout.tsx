import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function SignUpLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        // headerTintColor: "#ffd700",
        // headerTitle: "Sign up",
        headerTitleStyle: {
          fontWeight: "semibold",
        },
      }}
    >
      {/* Optionally configure static options outside the route.*/}
      {/* <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="phoneNumber" options={{}} />
      <Stack.Screen name="login_phoneNumber" options={{}} />
      <Stack.Screen name="OTP" options={{}} />
      <Stack.Screen name="login_OTP" options={{}} />
      <Stack.Screen name="name" options={{}} />
      <Stack.Screen name="welcome" options={{}} />
      <Stack.Screen name="location" options={{}} /> */}
    </Stack>
  );
}
