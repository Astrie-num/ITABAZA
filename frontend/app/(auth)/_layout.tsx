import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
      <Stack.Screen name="new-password" options={{ headerShown: false }} />
      <Stack.Screen name="verification" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
