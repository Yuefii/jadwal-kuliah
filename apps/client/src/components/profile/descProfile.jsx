import axios from "axios";
import { useEffect, useState } from 'react';

const DescProfile = () => {
  const [userData, setUserData] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      
      if (!token) {
        console.error("Token tidak tersedia di localStorage.");
        return;
      }
      
      try {
        const response = await axios.get('http://localhost:3001/apiV1/user', {
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
      <h1 className="text-center -mb-6 mt-5 font-bold text-blue-800">BIODATA</h1>
      <div className="border-2 border-blue-500 mx-5 mt-10 rounded-xl h-auto">
        <div className="p-5 text-blue-800 font-semibold">
          <div className="mb-3">
            <p>NPM:</p>
            <p className="p-2 border-2 border-blue-500 rounded-xl">
            {userData.data.npm}
            </p>
          </div>
          <div className="mb-3">
            <p>Nama Lengkap:</p>
            <p className="p-2 border-2 border-blue-500 rounded-xl">
            {userData.data.nama_lengkap}
            </p>
          </div>
          <div className="mb-3">
            <p>Program Studi:</p>
            <p className="p-2 border-2 border-blue-500 rounded-xl">
            {userData.data.jurusan[0]}
            </p>
          </div>
          <div className="mb-3 flex gap-4 items-center">
            <p>Semester:</p>
            <p className="p-2 border-2 border-blue-500 rounded-xl w-full text-center">
            {userData.data.semester[0]}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DescProfile;
