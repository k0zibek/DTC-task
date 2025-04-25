import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { useAuthStore } from "../services/auth/model/authStore";

export const WebViewScreen = ({ navigation }: any) => {
  return (
      <View className="flex-1">
        <SafeAreaView className="flex-1">
          <WebView
              source={{ uri: 'http://192.168.100.61:5173/' }}
              originWhitelist={["*"]}
              startInLoadingState
          />
        </SafeAreaView>

        <View className="mb-5">
          <TouchableOpacity
              onPress={() => {
                useAuthStore.persist.clearStorage();
                navigation.replace("Auth")
              }}
              className="bg-blue-600 px-6 py-3 rounded-lg"
          >
            <Text className="text-white text-center font-semibold text-lg">Выйти</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};