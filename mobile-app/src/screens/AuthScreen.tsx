import {View, Text, Alert, TouchableOpacity, TextInput} from 'react-native';
import * as LocalAuthentication from "expo-local-authentication";
import { useAuthStore } from "../services/auth/model/authStore";
import React, {useEffect, useState} from "react";

const CORRECT_PIN = "1234";

const handleBiometricAuth = async (navigation: any) => {
  const hasHardware = await LocalAuthentication.hasHardwareAsync();
  const isEnrolled = await LocalAuthentication.isEnrolledAsync();

  if (!hasHardware || !isEnrolled) {
    return Alert.alert("Биометрия недоступна", "Войдите с пин-кодом");
  }

  const biometricAuth = await LocalAuthentication.authenticateAsync({
    promptMessage: 'Войти с помощью биометрии',
    cancelLabel: 'Отмена',
    disableDeviceFallback: true,
  });

  if (biometricAuth.success) {
    useAuthStore.getState().login();
    navigation.replace('WebView');
  } else {
    Alert.alert("Не удалось пройти биометрию", "Попробуйте войти с пин-кодом");
  }
}

export const AuthScreen = ({ navigation }: any) => {
  const [pin, setPin] = useState("");
  const login = useAuthStore((state) => state.login);

  const handleLogin = () => {
    if (pin === CORRECT_PIN) {
      login();
      navigation.replace("WebView");
    } else {
      Alert.alert("Неверный PIN", "Попробуйте ещё раз");
      setPin("");
    }
  };

  useEffect(() => {
    handleBiometricAuth(navigation);
  },[])

  return (
      <View className='flex-1 bg-blue-50 justify-center items-center'>
        <View>
          <Text className="text-2xl font-semibold mb-4 text-center text-gray-900">Введите PIN-код</Text>
        </View>

        <TextInput
            value={pin}
            onChangeText={setPin}
            placeholder="****"
            secureTextEntry
            keyboardType="numeric"
            maxLength={4}
            className="border border-gray-300 rounded-lg p-5 text-center text-4xl mb-4 w-1/3"
        />

        <TouchableOpacity onPress={handleLogin} className="bg-blue-600 px-6 py-3 rounded-lg">
          <Text className="text-white font-semibold text-lg">Войти</Text>
        </TouchableOpacity>
      </View>
  );
}
