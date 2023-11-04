import { View } from "react-native";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";
import * as Notifications from "expo-notifications";
import React, { useEffect } from "react";
import { Permissions } from "expo-permissions";

export default function App() {
  useEffect(() => {
    // Fungsi untuk meminta izin notifikasi
    const requestNotificationPermission = async () => {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (status !== "granted") {
        alert("Izin notifikasi ditolak!");
      }
    };

    // Meminta izin notifikasi saat komponen pertama kali dijalankan
    requestNotificationPermission();

    // Inisialisasi notifikasi
    Notifications.setNotificationHandler({
      handleNotification: async (notification) => {
        // Lakukan tindakan ketika notifikasi diterima
        if (notification.request.content.data) {
          // Notifikasi membawa data tambahan, proses data tersebut
          const customData = notification.request.content.data;
          console.log(customData);
        }

        // Tampilkan notifikasi kepada pengguna
        showNotificationToUser(notification);

        // Mungkin jalankan suara atau getaran
        playNotificationSound();
      },
    });

    // Berlangganan notifikasi
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        // Lakukan sesuatu ketika notifikasi diterima
        console.log(notification);
      }
    );

    // Bersihkan langganan saat komponen dilepas
    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    // Fungsi untuk menjadwalkan notifikasi pada jam 7 pagi
    const scheduleMorningNotification = async () => {
      const now = new Date();
      const morningTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        7,
        0,
        0
      ); // Pukul 7 pagi
      if (morningTime > now) {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: "Cek Kegiatan Hari Ini",
            body: "Siapa Tau Anda memiliki jadwal kuliah!",
          },
          trigger: {
            date: morningTime,
          },
        });
      }
    };

    // Fungsi untuk menjadwalkan notifikasi pada jam 4 sore
    const scheduleEveningNotification = async () => {
      const now = new Date();
      const eveningTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        16,
        0,
        0
      ); // Pukul 4 sore
      if (eveningTime > now) {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: "Cek Kegiatan Hari Ini",
            body: "Siapa Tau Anda memiliki jadwal kuliah!",
          },
          trigger: {
            date: eveningTime,
          },
        });
      }
    };

    // Set interval untuk menjalankan kode setiap menit dan memeriksa waktu
    const checkAndScheduleNotifications = () => {
      const now = new Date();
      if (now.getHours() === 7 && now.getMinutes() === 0) {
        scheduleMorningNotification();
      }
      if (now.getHours() === 22 && now.getMinutes() === 24) {
        scheduleEveningNotification();
      }
    };

    // Set interval untuk menjalankan kode setiap menit
    const interval = setInterval(checkAndScheduleNotifications, 60000);

    // Bersihkan interval saat komponen dilepas
    return () => {
      clearInterval(interval);
    };
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
    </View>
  );
}
