import { View, Button } from "react-native";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";
import * as Notifications from "expo-notifications";
import React, { useEffect } from "react";

export default function App() {
  const notificationContent = {
    title: 'Cek Kegiatan anda hari',
    body: 'Siapa tau ada jadwal kuliah',
    sound: 'default',
  };

  const sendNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: notificationContent,
      trigger: null,
    });
  };

  const getNotificationPermission = async () => {
    const { granted } = await Notifications.requestPermissionsAsync();
    if (!granted) {
      console.log('Izin notifikasi ditolak!');
    }
  };

  useEffect(() => {
    getNotificationPermission();
  }, []);


  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" backgroundColor="#2F80ED" />
      <View style={{ flex: 1 }} backgroundColor="#2F80ED">
        <WebView
          style={{ marginTop: 32 }}
          source={{ uri: "https://sample-jadkul.vercel.app/" }}
        />
      </View>
      <Button title="Kirim Notifikasi" onPress={sendNotification} />
    </View>
  );
}
