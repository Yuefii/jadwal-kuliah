import { ChalkboardTeacher, Clock, User } from "@phosphor-icons/react";
import { getFormattedDay } from "@/utils/formatedDay";

import axios from "axios";
import { useEffect, useState } from "react";

const MatkulPagi = ({ userData }) => {
  const [jadwal, setJadwal] = useState([]);
  const [hariIniJadwal, setHariIniJadwal] = useState([]);
  const apikey = process.env.NEXT_PUBLIC_API_URL
  
  useEffect(() => {
    if (userData && userData.data) {
      const fetchDataJadwal = async () => {
        try {
          const response = await axios.get(
            apikey + `/api/V1/jadwal?tahun=2023&jurusan=${userData.data.jurusan.nama_jurusan}&semester=${userData.data.semester.semester_ke}&kelas=Malam`
          );

          setJadwal(response.data);

          const today = getFormattedDay(new Date());
          const hariIniData = response.data.filter((jadwalItem) => {
            return jadwalItem.hari.nama_hari === today;
          });

          setHariIniJadwal(hariIniData);
        } catch (error) {
          console.error("Gagal mengambil data dari API:", error);
        }
      };

      fetchDataJadwal();
    }
  }, [userData.data]);

  return (
    <main>
      <div className="p-3 text-center">
        {hariIniJadwal.length > 0 ? (
          <div className="text-blue-800 text-sm font-semibold mb-2">
            {hariIniJadwal.map((mataKuliah, index) => (
              <div key={index} className="mb-2">
                <h1 className="bg-blue-500 rounded-md text-white text-lg">
                  {mataKuliah.mata_kuliah.nama_matkul}
                </h1>
                <div className="flex gap-2 justify-center items-center p-2">
                  <User size={20} />
                  <h2>{mataKuliah.dosen.nama_dosen}</h2>
                </div>
                <div className="flex gap-3 justify-center">
                  <div className="flex gap-2 justify-center items-center">
                    <Clock size={20} />
                    <p>{mataKuliah.waktu.jam}</p>
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                    <ChalkboardTeacher size={20} />
                    <p>{mataKuliah.ruangan.nama_ruangan}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-blue-800 font-semibold">Hari ini Libur</p>
        )}
      </div>
    </main>
  );
};
export default MatkulPagi;
