import { ChalkboardTeacher, Clock, User } from "@phosphor-icons/react";
import { getFormattedDay } from '@/utils/formatHari';
import jadwal from "@/json/jadwal";

const MatkulPagi = () => {
  const hariIni = getFormattedDay();
  const kelas = "Pagi";
  
  const jadwalKelasHariIni = jadwal.find(item => item.kelas === kelas);

  const jadwalHariIni = jadwalKelasHariIni.data.find(item => item.hari === hariIni);

  return (
    <main>
      <div className="p-3 text-center">
        {jadwalHariIni ? (
          <div className="text-blue-500 text-sm font-semibold mb-2">
            {jadwalHariIni.mataKuliah.map((mataKuliah, index) => (
              <div key={index} className="mb-2">
                <h1 className="bg-blue-500 rounded-lg text-white text-lg">
                  {mataKuliah.nama}
                </h1>
                <div className="flex gap-2 justify-center items-center p-2">
                  <User size={20} />
                  <h2>{mataKuliah.dosen}</h2>
                </div>
                <div className="flex gap-3 justify-center">
                  <div className="flex gap-2 justify-center items-center">
                    <Clock size={20} />
                    <p>{mataKuliah.jam}</p>
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                    <ChalkboardTeacher size={20} />
                    <p>{mataKuliah.ruangan}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-blue-500 font-semibold">Hari ini Libur</p>
        )}
      </div>
    </main>
  );
};
export default MatkulPagi;
