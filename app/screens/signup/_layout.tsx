import { Stack } from "expo-router";

export default function SignUpLayout() {
  return (
    <Stack
      screenOptions={{
        // headerShown: true,
        // headerTintColor: "#ffd700",
        headerTitle: "Sign up",
        headerTitleStyle: {
          fontWeight: "semibold",
        },
      }}
    >
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="location" options={{}} />
    </Stack>
  );
}
