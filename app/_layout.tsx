import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(onboarding)/Splash" />
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
}
