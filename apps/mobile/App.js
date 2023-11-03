import { View } from "react-native";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" backgroundColor="#2F80ED" />
      <WebView
        style={{ marginTop: 32 }}
        source={{ uri: "https://sample-jadkul.vercel.app/" }}
      />
    </View>
  );
}
