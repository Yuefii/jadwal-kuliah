import { ChalkboardTeacher, Clock, User } from "@phosphor-icons/react";

const jadwal = [
  {
    hari: "Senin",
    mataKuliah: [
      {
        nama: "Sistem Basis Data",
        jam: "09:00",
        dosen: "Reksa",
        ruangan: "FK416",
      },
      {
        nama: "Bahasa Indonesia",
        jam: "10:30",
        dosen: "Aliah",
        ruangan: "FK521",
      },
    ],
  },
  {
    hari: "Rabu",
    mataKuliah: [
      {
        nama: "Pemograman Dasar",
        jam: "09:00",
        dosen: "Mustar",
        ruangan: "LABFK301",
      },
      { nama: "Agama Islam", jam: "10:30", dosen: "Yani", ruangan: "FK410" },
    ],
  },
  {
    hari: "Jumat",
    mataKuliah: [
      { nama: "Matematik 2", jam: "08:30", dosen: "Anisa", ruangan: "FK205" },
      { nama: "Struktur Data", jam: "10:00", dosen: "Nur", ruangan: "FK205" },
    ],
  },
  {
    hari: "Sabtu",
    mataKuliah: [
      {
        nama: "Komunikasi Data & Jaringan Komputer",
        jam: "07:30",
        dosen: "Edy",
        ruangan: "FK309",
      },
      {
        nama: "English for Computer",
        jam: "09.00",
        dosen: "Eva",
        ruangan: "FK309",
      },
    ],
  },
];

const MatkulPagi = () => {
  const timeZone = "Asia/Jakarta";
  const options = { timeZone, weekday: "long" };
  const hariIni = new Date().toLocaleDateString("id-ID", options);
  const jadwalHariIni = jadwal.find((item) => item.hari === hariIni);

  return (
    <main>
      <div className="p-3 text-center">
        {jadwalHariIni ? (
          <div className="text-blue-500 text-md font-semibold mb-2">
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
          <p>Hari ini Libur</p>
        )}
      </div>
    </main>
  );
};
export default MatkulPagi;
