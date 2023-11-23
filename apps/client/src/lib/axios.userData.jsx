import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const useUserData = () => {
  const [userData, setUserData] = useState({});
  const router = useRouter();
  const apikey = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(apikey + "/api/V1/user-profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setUserData(response.data);
        } else {
          console.error("Gagal mengambil data pengguna:", response.status);
        }
      } catch (error) {
        console.error("Gagal mengambil data pengguna:", error);
      }
    };
    fetchData();
  }, []);

  return userData;
};

export default useUserData;
