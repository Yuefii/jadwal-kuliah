import { ChalkboardTeacher, Clock } from "@phosphor-icons/react";

const jadwal = [
  {
    hari: "Selasa",
    mataKuliah: [
      { nama: "Agama Islam", jam: "18:30", dosen: "Yani", ruangan: "FK309" },
      {
        nama: "Sistem Basis Data",
        jam: "20.00",
        dosen: "Budi",
        ruangan: "FK309",
      },
    ],
  },
  {
    hari: "Rabu",
    mataKuliah: [
      { nama: "Struktur Data", jam: "18.30", dosen: "Nur", ruangan: "FK201" },
      {
        nama: "Pemograman Dasar",
        jam: "20.00",
        dosen: "Ferdi",
        ruangan: "LABFS505",
      },
    ],
  },
  {
    hari: "Kamis",
    mataKuliah: [
      {
        nama: "English for Comp",
        jam: "18.30",
        dosen: "Aris",
        ruangan: "FK518",
      },
      {
        nama: "Kom. Data & Jarkom",
        jam: "20.00",
        dosen: "Joni",
        ruangan: "FK518",
      },
    ],
  },
  {
    hari: "Jumat",
    mataKuliah: [
      { nama: "Matematika 2", jam: "18.30", dosen: "Vanes", ruangan: "FK308" },
      {
        nama: "Bahasa Indonesia",
        jam: "20.00",
        dosen: "Aliah",
        ruangan: "FK308",
      },
    ],
  },
];

const MatkulMalam = () => {
  const timeZone = "Asia/Jakarta";
  const options = { timeZone, weekday: "long" };
  const hariIni = new Date().toLocaleDateString("id-ID", options);
  const jadwalHariIni = jadwal.find((item) => item.hari === hariIni);

  return (
    <main>
      <div className="p-3 text-center">
        {jadwalHariIni ? (
          <div className="text-blue-500 text-sm font-semibold mb-2">
            {jadwalHariIni.mataKuliah.map((mataKuliah, index) => (
              <div
                key={index}
                className="text-blue-500 text-md font-semibold mb-2"
              >
                <h1 className="bg-blue-500 rounded-lg text-white text-lg">
                  {mataKuliah.nama}
                </h1>
                <div className="flex gap-2 justify-center items-center p-2">
                  <Clock size={20} />
                  <p>{mataKuliah.jam}</p>
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <ChalkboardTeacher size={20} />
                  <p>{mataKuliah.ruangan}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Hari ini Libur</p>
        )}
      </div>
    </main>
  );
};
export default MatkulMalam;
