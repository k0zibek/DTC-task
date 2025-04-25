import * as Linking from "expo-linking";
import { BackHandler, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { useAuthStore } from "../services/auth/model/authStore";
import { useEffect, useRef, useState } from "react";

const startURI = 'http://192.168.100.61:5173/'

export const WebViewScreen = ({ navigation }: any) => {
  const webViewRef = useRef<WebView>(null);
  const [canGoBack, setCanGoBack] = useState(false);

  const handleLogout = () => {
    useAuthStore.persist.clearStorage();
    useAuthStore.getState().logout();
    navigation.replace("Auth");
  };

  // Обработка аппаратной кнопки "назад" на Android
  useEffect(() => {
    const onBackPress = () => {
      if (canGoBack && webViewRef.current) {
        webViewRef.current.goBack();
        return true;
      }
      return false;
    };

    BackHandler.addEventListener("hardwareBackPress", onBackPress);
    return () => BackHandler.removeEventListener("hardwareBackPress", onBackPress);
  }, [canGoBack]);

  return (
      <View className="flex-1">
        <SafeAreaView className="flex-1">
          <WebView
              ref={webViewRef}
              source={{ uri: startURI }}
              onNavigationStateChange={(navState) => {
                setCanGoBack(navState.canGoBack);
              }}
              originWhitelist={["*"]}
              onShouldStartLoadWithRequest={(request) => {
                if (request.url !== startURI) {
                  Linking.openURL(request.url);
                  return false;
                }else {
                  return true;
                }
              }}
              startInLoadingState
          />
        </SafeAreaView>

        <View className="mb-5">
          <TouchableOpacity
              onPress={handleLogout}
              className="bg-blue-600 px-6 py-3 rounded-lg"
          >
            <Text className="text-white text-center font-semibold text-lg">Выйти</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};