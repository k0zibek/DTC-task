import { useEffect } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import * as LocalAuthentication from "expo-local-authentication";

const alertComponent = (
      title: string,
      message: string,
      buttonText: string,
      handlePress: () => void,
) => {
  return Alert.alert(title, message, [
    {
      text: buttonText,
      onPress: handlePress,
    }
  ]);
}

export const AuthScreen = ({ navigation }: any) => {
  const handleBiometricAuth = async () => {
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    if( !isBiometricAvailable ){
      return alertComponent(
            'Please enter your password',
            'Biometric is not available',
            'OK', () => console.log(isBiometricAvailable),
      )
    }

    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if( !savedBiometrics ){
      return alertComponent(
          'Biometric record not found',
          'Please enter your password',
          'OK', () => console.log(isBiometricAvailable),
      )
    }

    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Войти с помощью биометрии",
      disableDeviceFallback: true,
    });

    if (biometricAuth.success || savedBiometrics) {
      navigation.replace('WebView')
    } else {
      Alert.alert("Ошибка авторизации", "Не удалось пройти биометрию.");
    }
  }

  useEffect(() => {
    handleBiometricAuth()
  }, []);

  return (
      <View style={styles.authContainer}>
        <Text>Авторизация...</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
