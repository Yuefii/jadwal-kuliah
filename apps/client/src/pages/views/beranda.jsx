import Header from "@/components/beranda/header";
import HeadPagi from "@/components/headPagi";
import BorderDetails from "@/components/borderDetails";
import MatkulPagi from "@/components/beranda/matkulPagi";
import HeadMalam from "@/components/headMalam";
import MatkulMalam from "@/components/beranda/matkulMalam";
import axios from "axios";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Beranda = () => {
  const [userData, setUserData] = useState({});
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token tidak tersedia di localStorage.");
        redirectLogin();
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

  const redirectLogin = () => {
    router.push('/auth/login');
  };

  return (
    <main>
      <div className="relative lg:hidden">
        <Header userData={userData}/>
        <HeadPagi>
          <BorderDetails>
            <MatkulPagi userData={userData} />
          </BorderDetails>
        </HeadPagi>
        <HeadMalam>
          <BorderDetails>
            <MatkulMalam userData={userData} />
          </BorderDetails>
        </HeadMalam>
      </div>
    </main>
  );
};

export default Beranda;
