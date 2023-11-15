import React, { useState, useEffect } from "react";
import { Book, ChalkboardTeacher, User } from "@phosphor-icons/react";
import axios from "axios";

const ListHari = ({ userData }) => {
  const [jadwal, setJadwal] = useState([]);
  const [kelasTerpilih, setKelasTerpilih] = useState("Pagi");
  const apikey = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    if (userData && userData.data) {
      const fetchDataJadwal = async () => {
        try {
          const response = await axios.get(
            apikey + `/api/V1/jadwal?tahun=2023&jurusan=${userData.data.jurusan.nama_jurusan}&semester=${userData.data.semester.semester_ke}&kelas=${kelasTerpilih}`
          );
          setJadwal(response.data);
          console.log(response);
        } catch (error) {
          console.error("Gagal mengambil data dari API:", error);
        }
      };

      fetchDataJadwal();
    }
  }, [userData.data, kelasTerpilih]);

  const handleClickKelas = (kelas) => {
    setKelasTerpilih(kelas);
  };

  return (
    <main>
      <div className="relative mt-10 mx-5 gap-2 flex justify-center items-center">
        <button
          className={`bg-blue-500 w-full text-white text-xs rounded-lg px-12 py-2 font-semibold ${
            kelasTerpilih === "Pagi" ? "bg-blue-800" : ""
          }`}
          onClick={() => handleClickKelas("Pagi")}
        >
          Pagi
        </button>
        <button
          className={`bg-blue-500 w-full text-white text-xs rounded-lg px-12 py-2 font-semibold ${
            kelasTerpilih === "Malam" ? "bg-blue-800" : ""
          }`}
          onClick={() => handleClickKelas("Malam")}
        >
          Malam
        </button>
      </div>
      <div className="border border-blue-500 h-auto mx-5 rounded-lg mt-2">
        {jadwal.map((mk, index) => (
          <div
            key={index}
            className="border border-blue-500 h-auto my-2 mx-2 rounded-lg text-center p-2 text-sm text-blue-800 font-semibold"
          >
            <div className="flex items-center gap-1.5 justify-center">
            <Book/>
            <p>{mk.mata_kuliah.nama_matkul}</p>
            </div>
            <div className="flex justify-center gap-5 mt-1.5">
              <div className="flex items-center gap-1.5">
                <User />
                <p>{mk.dosen.nama_dosen}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <ChalkboardTeacher />
                <p>{mk.ruangan.nama_ruangan}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-20"></div>
    </main>
  );
};

export default ListHari;
