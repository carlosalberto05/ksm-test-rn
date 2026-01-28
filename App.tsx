// App.tsx (en la raíz)
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./src/screen/HomeScreen";

// Creamos el cliente para que TanStack Query funcione en toda la app
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
