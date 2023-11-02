import React from 'react';
import { View } from 'react-native'; // Mengimpor komponen View
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <StatusBar style="auto" backgroundColor="white" /> */}
      <WebView
        source={{ uri: 'https://sample-jadkul.vercel.app/' }}
      />
    </View>
  );
}
