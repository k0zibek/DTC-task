import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthScreen } from "./screens/AuthScreen";
import { WebViewScreen } from "./screens/WebViewScreen";
import "./global.css";
import { useAuthStore } from "./services/auth/model/authStore";

const Stack = createNativeStackNavigator();

export default function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isHydrated = useAuthStore((state) => state._hasHydrated);

  if (!isHydrated) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? "WebView" : "Auth"}>
        <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WebView" component={WebViewScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
