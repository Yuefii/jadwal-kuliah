import Header from "@/components/jadwal/header";
import ListHari from "@/components/jadwal/listHari";

import axios from "axios";
import { useEffect, useState } from 'react';

const Jadwal = () => {
  const [userData, setUserData] = useState({});


  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token tidak tersedia di localStorage.");
        return;
      }

      try {
        const response = await axios.get('http://localhost:3001/api/V1/user-profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          setUserData(response.data);
        } else {
          console.error('Gagal mengambil data pengguna:', response.status);
        }
      } catch (error) {
        console.error('Gagal mengambil data pengguna:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <Header userData={userData} />
      <ListHari userData={userData}/>
    </main>
  );
};
export default Jadwal;
