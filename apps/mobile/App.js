import React, { useRef, useEffect, useState } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const webViewRef = useRef(null);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

  useEffect(() => {
    Permissions.askAsync(Permissions.NOTIFICATIONS)
      .then(({ status }) => {
        if (status === 'granted') {
          Notifications.scheduleNotificationAsync({
            content: {
              title: 'Pemberitahuan Harian',
              body: 'Waktunya untuk memeriksa sesuatu!',
            },
            trigger: {
              hour: 7,
              minute: 0,
              repeats: true,
            },
          });
          setIsNotificationsEnabled(true);
        }
      });
  }, []);

  const handleMessage = (event) => {
    const message = event.nativeEvent.data;

    if (message === 'enableNotifications') {
      enableNotifications();
    } else if (message === 'disableNotifications') {
      disableNotifications();
    }
  };

  const enableNotifications = async () => {
    try {
      const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

      if (status !== 'granted') {
        const { status: newStatus } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

        if (newStatus !== 'granted') {
          return;
        }
      }

      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Pemberitahuan Harian',
          body: 'Waktunya untuk memeriksa sesuatu!',
        },
        trigger: {
          hour: 7,
          minute: 0,
          repeats: true,
        },
      });
      setIsNotificationsEnabled(true);
    } catch (error) {
      console.error('Gagal mengaktifkan notifikasi:', error);
    }
  };

  const disableNotifications = async () => {
    try {
      await Notifications.cancelAllScheduledNotificationsAsync();
      setIsNotificationsEnabled(false);
    } catch (error) {
      console.error('Gagal mematikan notifikasi:', error);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" backgroundColor="#2F80ED" />
      <WebView
      ref={webViewRef}
      onMessage={handleMessage}
      style={{marginTop: 32}}
        source={{ uri: 'https://sample-jadkul.vercel.app/' }}
      />
    </View>
  );
}
