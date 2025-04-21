import { StyleSheet, View, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export const WebViewScreen = () => {
  return (
      <View>
        <SafeAreaView style={styles.safeAreaWrapper}>
          <WebView source={{ uri: 'http://192.168.100.61:5173/' }} />
        </SafeAreaView>
      </View>
  );
};

const styles = StyleSheet.create({
  safeAreaWrapper: {
    flex: 1,
  },
});