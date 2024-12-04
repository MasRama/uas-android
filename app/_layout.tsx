import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

export const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="detail/[id]"
          options={{
            headerShown: false,
            title: "Movie Details"
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
